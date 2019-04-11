package com.springtesting.aop.api;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class OrderDetailLogger
{
    private Logger logger=LoggerFactory.getLogger(OrderDetailLogger.class);

    @Pointcut("within(com.springtesting.web.api.order.OrderDetailController)")
    public void orderDetailControllerPointcut() {}

    @Around("orderDetailControllerPointcut()")
    public Object logOrderDetailControllerRequests(ProceedingJoinPoint proceedingJoinPoint)
    {
        Object result=null;
        try
        {
            result = proceedingJoinPoint.proceed();
        }
        catch (Throwable throwable)
        {
            throwable.printStackTrace();
        }
        logger.info("Log {}.{}() with result = {}", proceedingJoinPoint.getSignature().getDeclaringTypeName(),
                proceedingJoinPoint.getSignature().getName(), result);
        return result;
    }
}
