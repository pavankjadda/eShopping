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
public class CategoryLogger
{
    private Logger logger=LoggerFactory.getLogger(CategoryLogger.class);

    @Pointcut("within(com.springtesting.web.api.CategoryController)")
    public void categoryControllerPointcut()
    {
        // Method is empty as this is just a Pointcut, the implementations are in the advices.
    }


    @Around("categoryControllerPointcut()")
    public Object logCategoryRequests(ProceedingJoinPoint proceedingJoinPoint)
    {
        Object result=null;
        try
        {
            result=proceedingJoinPoint.proceed();
        }
        catch (Throwable throwable)
        {
            throwable.printStackTrace();
        }
        logger.info("Log {}.{}() with result = {}",proceedingJoinPoint.getSignature().getDeclaringTypeName(),
                proceedingJoinPoint.getSignature().getName(), result);
        return result;
    }
}
