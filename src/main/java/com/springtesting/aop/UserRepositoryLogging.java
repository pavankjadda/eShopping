package com.springtesting.aop;

import com.springtesting.model.User;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class UserRepositoryLogging
{
    private Logger log= LoggerFactory.getLogger(UserRepositoryLogging.class);


    @Pointcut(value = "execution(* com.springtesting.repo.UserRepository.findAll(..)) && args(pageable,..)")
    public void getUserRepositoryFindAll(Pageable pageable) {};

    @After(value = "getUserRepositoryFindAll(pageable)", argNames = "pageable")
    public void findAll(Pageable pageable)
    {
        log.error("Log Message: Inside UserRepositoryLogging findAll() advice");
        log.error(pageable.toString());
    }


   @AfterReturning(pointcut = "execution(* com.springtesting.repo.UserRepository.findAll(..))",returning = "returnValue")
    public void logReturningUsers(Object returnValue)
    {
        Page<User> pageUsers= (Page<User>) returnValue;
        for(User user:pageUsers)
            System.out.println("Log: "+user.toString());
    }
}
