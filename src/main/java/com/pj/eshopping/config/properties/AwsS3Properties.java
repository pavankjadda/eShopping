package com.pj.eshopping.config.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * Maps AWS S3 properties to AwsS3Properties bean
 *
 * @author Pavan Kumar Jadda
 * @since 1.3.0
 */
@Configuration
@ConfigurationProperties(prefix = "aws.s3")
@Data
public class AwsS3Properties {
    private String bucket;
}
