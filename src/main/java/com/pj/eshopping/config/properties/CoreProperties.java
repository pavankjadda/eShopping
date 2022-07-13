package com.pj.eshopping.config.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * Maps PRES core properties such as domainName, smtpServer to CoreProperties bean
 *
 * @author Pavan Kumar Jadda
 * @since 1.3.0
 */
@Configuration
@ConfigurationProperties(prefix = "core")
@Data
public class CoreProperties {
    private App app;
    private String hostname;
    private String domainName;
    private boolean sendEmail;
    private String smtpServer;
    private int smtpPort;
    private boolean smtpDebug;

    @Data
    public static class App {
        private String version;
    }
}
