package com.springtesting;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig
{
    @Bean
    public PropertyResourceTest propertyResourceTest()
    {
        return new PropertyResourceTest();
    }
}
