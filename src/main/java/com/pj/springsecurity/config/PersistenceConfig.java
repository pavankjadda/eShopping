package com.pj.springsecurity.config;


import com.pj.springsecurity.audit.AuditorAwareImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@Configuration
@EnableJpaAuditing(auditorAwareRef = "auditorProvider")
public class PersistenceConfig
{
    @Bean
    AuditorAware<String> auditorProvider()
    {
        return new AuditorAwareImpl();
    }
}
