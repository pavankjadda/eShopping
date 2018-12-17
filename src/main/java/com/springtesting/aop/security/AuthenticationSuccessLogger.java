package com.springtesting.aop.security;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Aspect
@Component
public class AuthenticationSuccessLogger
{
    private Logger logger=LoggerFactory.getLogger(AuthenticationSuccessLogger.class);

    @Pointcut(value = "execution(* com.springtesting.security.handlers.CustomAuthenticationSuccessHandler.onAuthenticationSuccess(..)) && args(request,response,authentication,..)",
            argNames = "request,response,authentication")
    private void getOnAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {};

    @After(value = "getOnAuthenticationSuccess(request,response,authentication)",argNames = "joinPoint,request,response,authentication")
    private void afterOnAuthenticationSuccess( JoinPoint joinPoint,HttpServletRequest request, HttpServletResponse response, Authentication authentication)
    {
        logger.error("User Loggedin Successfull");
    }

    @Pointcut(value = "execution(* com.springtesting.security.handlers.CustomAuthenticationSuccessHandler.handle(..)) && args(request,response,authentication,..)",
            argNames = "request,response,authentication")
    private void getHandle(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {};

    @After(value = "getHandle(request,response,authentication)",argNames = "joinPoint,request,response,authentication")
    private void afterHandle( JoinPoint joinPoint,HttpServletRequest request, HttpServletResponse response, Authentication authentication)
    {
        logger.error("Inside: AuthenticationSuccessLogger afterHandle()");
    }

    @Pointcut(value = "execution(* com.springtesting.security.handlers.CustomAuthenticationSuccessHandler.*(..))")
    private void getCustomAuthenticationSuccessHandler() {};

    @After(value = "getCustomAuthenticationSuccessHandler()")
    private void afterCustomAuthenticationSuccessHandler( JoinPoint joinPoint)
    {
        logger.error("Inside: AuthenticationSuccessLogger afterCustomAuthenticationSuccessHandler()");
    }

}
