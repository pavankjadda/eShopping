package com.springtesting.aop.config;

import com.springtesting.aop.security.AuthenticationSuccessLogger;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@EnableAspectJAutoProxy(proxyTargetClass = true)
public class AopConfig
{

    @Bean
    public AuthenticationSuccessLogger loggingAspect()
    {
        return new AuthenticationSuccessLogger();
    }
}
