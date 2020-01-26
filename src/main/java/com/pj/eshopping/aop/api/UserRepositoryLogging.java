package com.pj.eshopping.aop.api;

import com.pj.eshopping.domain.user.User;
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
	private Logger logger = LoggerFactory.getLogger(UserRepositoryLogging.class);


	@Pointcut(value = "execution(* com.pj.eshopping.repo.UserRepository.findAll(..)) && args(pageable,..)")
	public void getUserRepositoryFindAll(Pageable pageable)
	{
		//Pointcut for getUserRepositoryFindAll
	}

	@After(value = "getUserRepositoryFindAll(pageable)", argNames = "pageable")
	public void findAll(Pageable pageable)
	{
		logger.error("Log Message: Inside UserRepositoryLogging findAll() advice");
	}


	@AfterReturning(pointcut = "execution(* com.pj.eshopping.repo.UserRepository.findAll(..))", returning = "pageUsers")
	public void logReturningUsers(Page<User> pageUsers)
	{
		if (pageUsers.getSize() > 0)
			logger.info("After returning from logReturningUsers() method");
	}
}
