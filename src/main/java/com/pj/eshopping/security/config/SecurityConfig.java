package com.pj.eshopping.security.config;


import com.pj.eshopping.repo.UnauthorizedRequestRepository;
import com.pj.eshopping.security.MyUserDetailsService;
import com.pj.eshopping.security.handlers.CustomAccessDeniedHandler;
import com.pj.eshopping.security.handlers.CustomBasicAuthenticationEntryPoint;
import com.pj.eshopping.security.handlers.CustomLogoutSuccessHandler;
import com.pj.eshopping.security.providers.CustomDaoAuthenticationProvider;
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
import org.springframework.session.security.web.authentication.SpringSessionRememberMeServices;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Collections;


@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter
{
	private final MyUserDetailsService userDetailsService;

	private final UnauthorizedRequestRepository unauthorizedRequestRepository;

	private final CustomBasicAuthenticationEntryPoint customBasicAuthenticationEntryPoint;

	@Autowired
	public SecurityConfig(MyUserDetailsService userDetailsService, UnauthorizedRequestRepository unauthorizedRequestRepository, CustomBasicAuthenticationEntryPoint customBasicAuthenticationEntryPoint)
	{
		this.userDetailsService = userDetailsService;
		this.unauthorizedRequestRepository = unauthorizedRequestRepository;
		this.customBasicAuthenticationEntryPoint = customBasicAuthenticationEntryPoint;
	}

	@Override
	public void configure(AuthenticationManagerBuilder auth)
	{
		auth.authenticationProvider(getDaoAuthenticationProvider());
	}

	@Bean
	public CustomDaoAuthenticationProvider getDaoAuthenticationProvider()
	{
		CustomDaoAuthenticationProvider daoAuthenticationProvider = new CustomDaoAuthenticationProvider();
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
		http.authorizeRequests().antMatchers("/console/**", "/h2-console/**", "/static/**", "/resources/static/**").permitAll();

		http.authorizeRequests()
				//.antMatchers("/anonymous*").anonymous()
				.antMatchers("/api/**").hasAnyAuthority(AuthorityConstants.ROLE_USER, AuthorityConstants.ROLE_API_USER, AuthorityConstants.ROLE_ADMIN)
				.antMatchers("/login/**").permitAll()
				.anyRequest().authenticated()
				.and()
				.httpBasic()
				.and()
				.exceptionHandling()
				.authenticationEntryPoint(customBasicAuthenticationEntryPoint)
				.and()
				.logout()
				.deleteCookies("X-Auth-Token")
				.clearAuthentication(true)
				.invalidateHttpSession(true)
				.logoutSuccessHandler(new CustomLogoutSuccessHandler())
				.permitAll()
				.and()
				.exceptionHandling()
				.accessDeniedHandler(new CustomAccessDeniedHandler(unauthorizedRequestRepository))
				.and()
				.rememberMe().rememberMeServices(springSessionRememberMeServices());

		// Uses CorsConfigurationSource bean defined below
		http.cors();

		http.sessionManagement()
				//.invalidSessionUrl("/login.html")
				//.invalidSessionStrategy((request, response) -> request.logout())
				.sessionFixation().migrateSession()
				.maximumSessions(2)
				.maxSessionsPreventsLogin(true)
				.sessionRegistry(sessionRegistry());

		http.csrf()
				.disable();
		http.headers()
				.frameOptions().disable();
	}

	@Bean
	public SpringSessionRememberMeServices springSessionRememberMeServices()
	{
		SpringSessionRememberMeServices rememberMeServices = new SpringSessionRememberMeServices();
		rememberMeServices.setRememberMeParameterName("remember-me");
		rememberMeServices.setValiditySeconds(ApplicationConstants.REMEMBER_ME_TIMEOUT);
		return rememberMeServices;
	}

	//Cors filter to accept incoming requests
	@Bean
	CorsConfigurationSource corsConfigurationSource()
	{
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.applyPermitDefaultValues();
		configuration.setAllowedMethods(Collections.singletonList("*"));
		configuration.setAllowCredentials(true);
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}

	@Override
	public void configure(WebSecurity web)
	{
		web.ignoring()
				.antMatchers("/resources/**", "/static/**", "/resources/static/**", "/css/**", "/js/**", "/images/**", "/h2-console/**", "/console/**");
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
}
