package com.pj.eshopping.security.config;

import com.pj.eshopping.repo.UnauthorizedRequestRepository;
import com.pj.eshopping.security.MyUserDetailsService;
import com.pj.eshopping.security.handlers.CustomAccessDeniedHandler;
import com.pj.eshopping.security.handlers.CustomBasicAuthenticationEntryPoint;
import com.pj.eshopping.security.handlers.CustomLogoutSuccessHandler;
import com.pj.eshopping.security.providers.CustomDaoAuthenticationProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.session.security.web.authentication.SpringSessionRememberMeServices;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Collections;

import static com.pj.eshopping.security.config.AuthorityConstants.ROLE_ADMIN;
import static com.pj.eshopping.security.config.AuthorityConstants.ROLE_API_USER;

/**
 * Core security config class of the project
 *
 * @author Pavan Kumar Jadda
 * @since 2.5.0
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    private final MyUserDetailsService userDetailsService;
    private final UnauthorizedRequestRepository repository;
    private final CustomBasicAuthenticationEntryPoint entryPoint;

    public SecurityConfig(MyUserDetailsService userDetailsService, UnauthorizedRequestRepository repository,
                          CustomBasicAuthenticationEntryPoint entryPoint) {
        this.userDetailsService = userDetailsService;
        this.repository = repository;
        this.entryPoint = entryPoint;
    }

    /**
     * JDBC Authentication Provider that provides integrates with Database to authenticate users
     *
     * @author Pavan Kumar Jadda
     * @since 2.0.0
     */
    @Bean
    public CustomDaoAuthenticationProvider getDaoAuthenticationProvider() {
        var provider = new CustomDaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(getBCryptPasswordEncoder());
        return provider;
    }

    /**
     * Bcrypt PasswordEncoder with strength 12
     *
     * @author Pavan Kumar Jadda
     * @since 2.0.0
     */
    @Bean
    public PasswordEncoder getBCryptPasswordEncoder() {
        return new BCryptPasswordEncoder(12);
    }

    /**
     * Bean for Angular,React and Mobile client requests. Creates SESSION cookie if required
     *
     * @author Pavan Kumar Jadda
     * @since 2.4.0
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(
                        registry -> registry.requestMatchers("/console/**", "/h2-console/**", "/static/**", "/resources/static/**").permitAll()
                                .requestMatchers("/api/**")
                                .hasAnyAuthority(AuthorityConstants.ROLE_USER, ROLE_API_USER, ROLE_ADMIN).requestMatchers("/login/**").permitAll().anyRequest()
                                .authenticated()
                                .and()).httpBasic().and().exceptionHandling().authenticationEntryPoint(entryPoint)
                .and()
                .logout().deleteCookies("X-Auth-Token").clearAuthentication(true).invalidateHttpSession(true)
                .logoutSuccessHandler(new CustomLogoutSuccessHandler()).permitAll()
                .and().exceptionHandling()
                .accessDeniedHandler(new CustomAccessDeniedHandler(repository))
                .and().rememberMe()
                .rememberMeServices(springSessionRememberMeServices());

        http.headers().frameOptions().disable();

        // Uses CorsConfigurationSource bean defined below
        http.cors().configurationSource(corsConfigurationSource());

        // Use CookieCsrfTokenRepository to issue cookie based CSRF(XSRF) tokens
        http.csrf().ignoringRequestMatchers("/api/v1/search/**", "/api/v1/actuator/**").csrfTokenRepository(cookieCsrfTokenRepository());

        // Disable CSRF(XSRF) tokens for API requests
        //http.csrf().disable();

        return http.build();
    }

    @Bean
    public SpringSessionRememberMeServices springSessionRememberMeServices() {
        SpringSessionRememberMeServices rememberMeServices = new SpringSessionRememberMeServices();
        rememberMeServices.setRememberMeParameterName("remember-me");
        rememberMeServices.setValiditySeconds(ApplicationConstants.REMEMBER_ME_TIMEOUT);
        return rememberMeServices;
    }

    /**
     * Custom CookieCsrfTokenRepository bean to issue cookie based CSRF(XSRF) tokens
     *
     * @author Pavan Kumar Jadda
     * @since 2.6.0
     */
    @Bean
    CookieCsrfTokenRepository cookieCsrfTokenRepository() {
        var tokenRepository = CookieCsrfTokenRepository.withHttpOnlyFalse();
        tokenRepository.setSecure(true);
        return tokenRepository;
    }

    /**
     * CORS filter to accept incoming requests
     *
     * @author Pavan Kumar Jadda
     * @since 2.0.0
     */
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        var configuration = new CorsConfiguration();
        configuration.applyPermitDefaultValues();
        configuration.setAllowedMethods(Collections.singletonList("*"));
        configuration.setAllowedOrigins(Collections.singletonList("*"));
        //configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return web -> web.ignoring()
                .requestMatchers("/resources/**", "/static/**", "/resources/static/**", "/css/**", "/js/**", "/images/**", "/h2-console/**", "/console/**");
    }

    @Bean
    public SessionRegistry sessionRegistry() {
        return new SessionRegistryImpl();
    }
}