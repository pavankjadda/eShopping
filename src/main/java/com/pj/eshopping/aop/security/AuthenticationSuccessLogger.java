package com.pj.eshopping.aop.security;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class AuthenticationSuccessLogger
{
	private Logger logger = LoggerFactory.getLogger(AuthenticationSuccessLogger.class);


	@Pointcut("within(com.pj.eshopping.security.handlers.CustomAuthenticationSuccessHandler..*)")
	public void customAuthenticationSuccessHandlerPointcut()
	{
		// Method is empty as this is just a Pointcut, the implementations are in the advices.
	}

	@Pointcut("within(com.pj.eshopping.repo..*) || within(com.pj.eshopping.web..*)")
	public void applicationPackagePointcut()
	{
		//Inside applicationPackagePointcut
	}

	@Around("applicationPackagePointcut() && customAuthenticationSuccessHandlerPointcut()")
	public Object logCustomAuthenticationSuccessHandlerPointcut(ProceedingJoinPoint proceedingJoinPoint)
	{
		logger.info("Enter: {}.{}() with argument[s] = {}", proceedingJoinPoint.getSignature().getDeclaringTypeName(),
				proceedingJoinPoint.getSignature().getName(), proceedingJoinPoint.getArgs());

		Object result = null;
		try
		{
			result = proceedingJoinPoint.proceed();
			logger.info("proceedingJoinPoint.proceed() result: {}", result);
		}
		catch (Throwable throwable)
		{
			logger.warn("throwable: ", throwable);
		}

		logger.info("Exit: {}.{}() with result = {}", proceedingJoinPoint.getSignature().getDeclaringTypeName(),
				proceedingJoinPoint.getSignature().getName(), result);
		return result;
	}


	@AfterThrowing(pointcut = "applicationPackagePointcut() && customAuthenticationSuccessHandlerPointcut()", throwing = "e")
	public void logAfterThrowing(JoinPoint joinPoint, Throwable e)
	{
		logger.info("Exception in {}.{}() with cause = {}", joinPoint.getSignature().getDeclaringTypeName(),
				joinPoint.getSignature().getName(), e.getCause() != null ? e.getCause() : "NULL");

	}

}
