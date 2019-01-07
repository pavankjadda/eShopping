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

    /**
     * Pointcut that matches all Spring beans in the application's main packages.
     */
    @Pointcut("within(com.springtesting.repo..*)"+
            " || within(com.springtesting.service..*)"+
            " || within(com.springtesting.web.api..*) ")
    public void applicationPackagePointcut()
    {
    }

    @Pointcut("within(com.springtesting.web.api..*)")
    public void categoryPointcut()
    {
        // Method is empty as this is just a Pointcut, the implementations are in the advices.
    }


    @Around("applicationPackagePointcut() && categoryPointcut()")
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
        logger.info("Method {}.{}() with result = {}",proceedingJoinPoint.getSignature().getDeclaringTypeName(),
                proceedingJoinPoint.getSignature().getName(), result);
        return result;
    }
}
