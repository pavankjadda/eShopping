package com.pj.springsecurity.aop.api;

import com.pj.springsecurity.exceptions.exceptions.CategoryException;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class CategoryLogger
{
    private Logger logger = LoggerFactory.getLogger(CategoryLogger.class);

    @Pointcut("within(com.pj.springsecurity.web.api.product.CategoryController)")
    public void categoryControllerPointcut()
    {
        // Method is empty as this is just a Pointcut, the implementations are in the advices.
    }


    @AfterThrowing(value = "execution(* com.pj.springsecurity.web.api.product.CategoryController.*(..))",throwing = "exception")
    public void categoryExceptionClass(CategoryException exception)
    {
        logger.info("Category Exception: {}",exception.getMessage());
    }
}
