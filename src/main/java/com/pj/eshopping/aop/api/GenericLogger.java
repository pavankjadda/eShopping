package com.pj.eshopping.aop.api;

import com.pj.eshopping.exceptions.exceptions.GenericException;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Aspect
@Component
public class GenericLogger
{
	private Logger logger = LoggerFactory.getLogger(GenericLogger.class);

	@Before(value = "within(com.pj.eshopping..*)")
	public void beforeAdvice(JoinPoint joinPoint)
	{
		logger.info("Method {} execution started at {}", joinPoint.getSignature(), LocalDateTime.now());
	}

	@After(value = "within(com.pj.eshopping..*)")
	public void afterAdvice(JoinPoint joinPoint)
	{
		logger.info("Method {} execution finished at {}", joinPoint.getSignature(), LocalDateTime.now());
	}


	@AfterThrowing(value = "within(com.pj.eshopping..*)", throwing = "exception")
	public void genericExceptionClass(GenericException exception)
	{
		logger.info("GenericException occurred and Error: {}", exception.getMessage());
	}
}
