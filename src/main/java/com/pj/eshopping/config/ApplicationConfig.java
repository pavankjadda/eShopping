package com.pj.eshopping.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.firewall.HttpStatusRequestRejectedHandler;
import org.springframework.security.web.firewall.RequestRejectedHandler;
import org.springframework.security.web.session.HttpSessionEventPublisher;
import org.springframework.session.web.http.CookieHttpSessionIdResolver;
import org.springframework.session.web.http.HttpSessionIdResolver;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Core application config class that defines required beans for application
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
@Configuration
public class ApplicationConfig implements WebMvcConfigurer {
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     * Create HttpSessionEventPublisher bean
     *
     * @return HttpSessionEventPublisher bean
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @Bean
    public HttpSessionEventPublisher httpSessionEventPublisher() {
        return new HttpSessionEventPublisher();
    }

    /**
     * Create HttpSessionIdResolver bean that sets SESSION cookie after successful login
     *
     * @return HttpSessionIdResolver bean with SESSION cookie
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @Bean
    public HttpSessionIdResolver httpSessionIdResolver() {
        return new CookieHttpSessionIdResolver();
    }

    /**
     * Allows // in HTTP requests
     *
     * @return HttpStatusRequestRejectedHandler bean
     */
    @Bean
    RequestRejectedHandler requestRejectedHandler() {
        return new HttpStatusRequestRejectedHandler();
    }


    /**
     * Create ModelMapper bean
     *
     * @return ModelMapper bean
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    /**
     * Create WebClient bean and set default buffer size to 100Mb
     *
     * @return WebClient bean
     *
     * @author Pavan Kumar Jadda
     * @since 2.5.40
     */
    @Bean
    public WebClient webClient() {
        return WebClient.builder().codecs(clientCodecConfigurer -> clientCodecConfigurer.defaultCodecs().maxInMemorySize(100 * 1024 * 1024)).build();
    }
}

