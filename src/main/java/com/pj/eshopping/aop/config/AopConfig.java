package com.pj.eshopping.aop.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

/**
 * Configuration class that defines required beans for application
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
@Configuration
@EnableAspectJAutoProxy(proxyTargetClass = true)
public class AopConfig {
    //Beans created through @Component annotation on Logger class
}
