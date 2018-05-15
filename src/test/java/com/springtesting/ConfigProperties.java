package com.springtesting;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import java.util.List;
import java.util.Map;

@Data
@Configuration
@PropertySource("classpath:db_test.properties")
@ConfigurationProperties(prefix = "jdbc")
public class ConfigProperties
{
    public static class Credentials
    {
        private String authMethod;
        private String username;
        private String password;

        // standard getters and setters
    }
    private String host;
    private int port;
    private String from;
    private Credentials credentials;
    private List<String> defaultRecipients;
    private Map<String, String> additionalHeaders;

    @Bean
    public DatabaseConfig   databaseConfig()
    {
        DatabaseConfig  dbConfig=new DatabaseConfig();
        dbConfig.setHost(host);
        dbConfig.setPort(port);
        dbConfig.setFrom(from);
        dbConfig.setCredentials(credentials);
        dbConfig.setDefaultRecipients(defaultRecipients);
        dbConfig.setAdditionalHeaders(additionalHeaders);

        return dbConfig;
    }
}
