package com.pj.eshopping.config.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * Maps Redis properties to RedisProperties bean. This bean is used to configure Redis connection.
 *
 * @author Pavan Kumar Jadda
 * @since 1.3.0
 */
@Component
@ConfigurationProperties(prefix = "spring.redis")
@Data
public class RedisProperties {
    private String host;
    private String port;
}
