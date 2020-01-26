package com.pj.eshopping.aop.api;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Aspect
public class UserLogging
{
	private Logger logger = LoggerFactory.getLogger(UserLogging.class);

	@Pointcut("execution(* com.pj.eshopping.domain.user.User.*(..))")
	public void getUserPointCut()
	{
		//Pointcut
	}


	@Before("getUserPointCut()")
	public void beforeAdvice()
	{
		logger.error("Inside UserLogging.beforeAdvice() method");
	}

	@After("getUserPointCut()")
	public void afterAdvice()
	{
		logger.info("Inside UserLogging.afterAdvice() method");
	}

}
