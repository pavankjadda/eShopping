package com.pj.eshopping.config.properties;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

/**
 * Maps Email properties to EmailProperties bean
 *
 * @author Pavan Kumar Jadda
 * @since 1.3.0
 */
@Configuration
@ConfigurationProperties(prefix = "email")
@Data
public class EmailProperties {
    //Inject Environment to get active profile
    private Environment environment;

    private String sendTo;
    private String sendFrom;
    private String sendToBcc;
    private String replyTo;
    private String subject;
    private Admin admin;

    @Autowired
    public EmailProperties(Environment environment) {
        this.environment = environment;
    }

    /**
     * Subclass that gets Admin email properties
     *
     * @author Pavan Kumar Jadda
     * @since 2.0.0
     */
    @Data
    public static class Admin {
        private String sendTo;
    }
}
