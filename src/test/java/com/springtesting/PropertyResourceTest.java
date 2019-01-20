package com.springtesting;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
@PropertySource("classpath:test.properties")
public class PropertyResourceTest
{
    @Autowired
    Environment environment;
    private String jdbcUrl;
    private String jdbcUsername;
    private String jdbcPassword;

    @Bean
    public static PropertySourcesPlaceholderConfigurer propertyConfigInDev()
    {
        return new PropertySourcesPlaceholderConfigurer();
    }

    public String getJdbcUrl()
    {
        return environment.getProperty("jdbc.url");
    }

    public void setJdbcUrl()
    {
        this.jdbcUrl = environment.getProperty("jdbc.url");
    }

    public String getJdbcUsername()
    {
        return environment.getProperty("jdbc.username");
    }

    public void setJdbcUsername()
    {
        this.jdbcUsername = environment.getProperty("jdbc.username");
    }

    public String getJdbcPassword()
    {
        return environment.getProperty("jdbc.password");
    }

    public void setJdbcPassword()
    {
        this.jdbcPassword = environment.getProperty("jdbc.password");
    }

    public Environment getEnvironment()
    {
        return environment;
    }

    public void setEnvironment(Environment environment)
    {
        this.environment = environment;
    }
}
