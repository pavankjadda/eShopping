package com.springtesting.aop.config;

import com.springtesting.aop.security.AuthenticationSuccessLogger;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@EnableAspectJAutoProxy(proxyTargetClass = true)
public class AopConfig
{
  //Beans created through @Component annotation on Logger class
}
