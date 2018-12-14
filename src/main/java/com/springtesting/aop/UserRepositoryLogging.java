package com.springtesting.aop;

import com.springtesting.model.User;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class UserRepositoryLogging
{
    private Logger log= LoggerFactory.getLogger(UserRepositoryLogging.class);


    //@Pointcut(value = "com.springtesting.repo.UserRepository.findAll() && args(pageable)")
    @Pointcut(value = "execution(* com.springtesting.repo.UserRepository.findAll(pageable))", argNames = "pageable")
    public void getUserRepositoryFindAll(Pageable pageable) {};


    @After(value = "getUserRepositoryFindAll(pageable)", argNames = "pageable")
    public void findAll(Pageable pageable)
    {
        log.warn("Log Message: Inside UserRepositoryLogging findAll() advice");
    }

 /*   @AfterReturning(pointcut = "execution(* com.springtesting.repo.UserRepository.findAll(pageable))",returning = "returnValue")
    public void logReturningUsers(Object returnValue)
    {
        Page<User> pageUsers= (Page<User>) returnValue;
        for(User user:pageUsers)
            System.out.println(user.toString());
    }*/
}
