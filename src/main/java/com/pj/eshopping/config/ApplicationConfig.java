package com.pj.eshopping.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.session.HttpSessionEventPublisher;
import org.springframework.session.web.http.HeaderHttpSessionIdResolver;
import org.springframework.session.web.http.HttpSessionIdResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class ApplicationConfig implements WebMvcConfigurer
{
	@Bean
	public BCryptPasswordEncoder passwordEncoder()
	{
		return new BCryptPasswordEncoder();
	}

	@Bean
	public HttpSessionEventPublisher httpSessionEventPublisher()
	{
		return new HttpSessionEventPublisher();
	}

	@Bean
	public HttpSessionIdResolver httpSessionIdResolver()
	{
		return HeaderHttpSessionIdResolver.xAuthToken();
	}

	@Bean
	public ModelMapper modelMapper()
	{
		return new ModelMapper();
	}
}

