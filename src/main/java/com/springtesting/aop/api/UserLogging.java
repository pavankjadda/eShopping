package com.springtesting.aop.api;

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

    @Pointcut("execution(* com.springtesting.model.User.*(..))")
    public void getUserPointCut()
    {
    }


    @Before("getUserPointCut()")
    public void beforeAdvice()
    {
        logger.error("Inside UserLogging.beforeAdvice() method");
    }

    @After("getUserPointCut()")
    public void afterAdvice()
    {
        System.out.println("Inside UserLogging.afterAdvice() method");
    }

}
