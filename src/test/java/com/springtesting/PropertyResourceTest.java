package com.springtesting;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.stereotype.Component;

@Component
@Data
@PropertySource("classpath:test.properties")
public class PropertyResourceTest
{
    @Value("${jdbc.url}")
    private  String  jdbcUrl;

    @Value("${jdbc.username}")
    private  String  jdbcUsername;

    @Value("${jdbc.password}")
    private  String  jdbcPassword;


    @Bean
    public static PropertySourcesPlaceholderConfigurer propertyConfigInDev()
    {
        return new PropertySourcesPlaceholderConfigurer();
    }
}
