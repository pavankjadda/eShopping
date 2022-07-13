package com.pj.eshopping.config.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * Maps LDAP server properties to LdapProperties bean
 *
 * @author Pavan Kumar Jadda
 * @since 1.3.0
 */
@Configuration
@ConfigurationProperties(prefix = "ldap")
@Data
public class LdapProperties {
    private String url;
    private String domain;
}
