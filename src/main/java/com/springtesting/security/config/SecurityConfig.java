package com.springtesting.security.config;


import com.springtesting.security.MyUserDetailsService;
import com.springtesting.security.handlers.CustomAuthenticationFailureHandler;
import com.springtesting.security.handlers.CustomAuthenticationSuccessHandler;
import com.springtesting.security.handlers.CustomLogoutSuccessHandler;
import com.springtesting.security.providers.CustomDaoAuthenticationProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.session.HttpSessionEventPublisher;
import org.springframework.session.security.web.authentication.SpringSessionRememberMeServices;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.Collections;


@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter
{
    private final MyUserDetailsService userDetailsService;

    @Autowired
    public SecurityConfig(MyUserDetailsService userDetailsService)
    {
        this.userDetailsService = userDetailsService;
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth)
    {
        auth.authenticationProvider(getDaoAuthenticationProvider());
    }

    @Bean
    public CustomDaoAuthenticationProvider getDaoAuthenticationProvider()
    {
        CustomDaoAuthenticationProvider daoAuthenticationProvider=new CustomDaoAuthenticationProvider();
        daoAuthenticationProvider.setUserDetailsService(userDetailsService);
        daoAuthenticationProvider.setPasswordEncoder(getBCryptPasswordEncoder());
        return daoAuthenticationProvider;
    }

    /* BCrypt strength should 12 or more*/
    @Bean
    public PasswordEncoder getBCryptPasswordEncoder()
    {
        return new BCryptPasswordEncoder(12);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception
    {
            http.authorizeRequests()
                    .antMatchers("/anonymous*").anonymous()
                    //.antMatchers("/users/**").permitAll()
                    .antMatchers("/users/**").hasAuthority(AuthorityConstants.Admin)
                    .antMatchers("/admin**").hasAuthority(AuthorityConstants.Admin)
                    .antMatchers("/profile/**").hasAuthority(AuthorityConstants.User)
                    .antMatchers("/api/**").hasAnyAuthority(AuthorityConstants.ApiUser,AuthorityConstants.Admin)
                    .antMatchers("/dba/**").hasAuthority(AuthorityConstants.Dba)
                    .anyRequest().authenticated()
            .and()
                    .httpBasic()
            .and()
                    .formLogin()
                        .loginPage("/login")
                        .loginProcessingUrl("/login")
                        .successHandler(new CustomAuthenticationSuccessHandler())
                        .failureHandler(new CustomAuthenticationFailureHandler())
                        .permitAll()
            .and()
                    .logout()
                        .deleteCookies("JSESSIONID")
                        .logoutSuccessHandler(new CustomLogoutSuccessHandler())
                        .permitAll()
            .and()
                    .rememberMe().rememberMeServices(springSessionRememberMeServices());

        // Uses CorsConfigurationSource bean defined below
        http.cors();

        http.sessionManagement()
                        //.invalidSessionUrl("/login.html")
                        //.invalidSessionStrategy((request, response) -> request.logout())
                        .sessionFixation().migrateSession()
                        .maximumSessions(1)
                        .maxSessionsPreventsLogin(false)
                        .sessionRegistry(sessionRegistry());

        http.csrf()
            .disable();

    }

    @Bean
    public SpringSessionRememberMeServices springSessionRememberMeServices()
    {
        SpringSessionRememberMeServices rememberMeServices = new SpringSessionRememberMeServices();
        // optionally customize
        rememberMeServices.setRememberMeParameterName("remember-me");
        rememberMeServices.setValiditySeconds(ApplicationConstants.rememberMeTimeOut);
        return rememberMeServices;
    }

    //Cors filter to accept incoming requests
   @Bean
    CorsConfigurationSource corsConfigurationSource()
    {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.applyPermitDefaultValues();
        //configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Collections.singletonList("*"));
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }


    @Override
    public void configure(WebSecurity web) throws Exception
    {
        web
            .ignoring()
            .antMatchers("/resources/**", "/static/**", "/css/**", "/js/**", "/images/**");
    }

    @Bean
    public HttpSessionEventPublisher httpSessionEventPublisher()
    {
        return new HttpSessionEventPublisher();
    }

    @Bean("authenticationManager")
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception
    {
        return super.authenticationManagerBean();
    }

    @Bean
    public SessionRegistry sessionRegistry()
    {
        return new SessionRegistryImpl();
    }


   /* @Bean
    SpringSessionBackedSessionRegistry sessionRegistry()
    {
        return new SpringSessionBackedSessionRegistry<>(this.sessionRepository);
    }*/

    /*
 @Bean
 public WebMvcConfigurer corsConfigurer()
 {
     return new WebMvcConfigurer()
     {
         @Override
         public void addCorsMappings(CorsRegistry registry)
         {
             registry.addMapping("**").allowedOrigins("http://localhost:4200/*");
         }
     };
     return new WebMvcConfigurerAdapter()
     {
         @Override
         public void addCorsMappings(CorsRegistry registry)
         {
             registry.addMapping("**").allowedOrigins("http://localhost:4200");
         }
     };
 }*/
}
