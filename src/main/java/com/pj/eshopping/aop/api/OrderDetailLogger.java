package com.pj.eshopping.aop.api;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class OrderDetailLogger
{
	private Logger logger = LoggerFactory.getLogger(OrderDetailLogger.class);

	@Pointcut("within(com.pj.eshopping.web.order.OrderController)")
	public void orderControllerPointcut()
	{
		//Point cut orderDetailControllerPointcut
	}
/*
    @Around("orderControllerPointcut()")
    public Object logOrderControllerRequests(ProceedingJoinPoint proceedingJoinPoint)
    {
        Object result=null;
        try
        {
            result = proceedingJoinPoint.proceed();
        }
        catch (Throwable throwable)
        {
            logger.warn("Exception: ",throwable);
        }
        logger.info("Log {}.{}() with result = {}", proceedingJoinPoint.getSignature().getDeclaringTypeName(),
                proceedingJoinPoint.getSignature().getName(), result);
        return result;
    }*/
}
