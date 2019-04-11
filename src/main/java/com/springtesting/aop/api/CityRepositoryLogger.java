package com.springtesting.aop.api;

import com.springtesting.model.user.State;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class CityRepositoryLogger
{
    private Logger logger = LoggerFactory.getLogger(CityRepositoryLogger.class);

    @Pointcut("execution(* com.springtesting.repo.CityRepository.findAll(..))")
    private void getFindAll()
    {
    }

    @Pointcut(value = "execution(* com.springtesting.repo.CityRepository.findByNameAndState(..)) && args(name,state,..)",
            argNames = "name,state")
    private void getFindByNameAndState(String name, State state)
    {
    }

    @After(value = "getFindAll()")
    private void afterFindAll(JoinPoint joinPoint)
    {
        logger.error("Inside CityRepositoryLogger  afterFindAll()");
    }

    @After(value = "getFindByNameAndState(name,state)", argNames = "name,state")
    private void afterFindByNameAndState(String name, State state)
    {
        logger.error("Inside CityRepositoryLogger  afterFindByNameAndState()");
    }
}
