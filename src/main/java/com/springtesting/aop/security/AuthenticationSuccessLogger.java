package com.springtesting.aop.security;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Arrays;

@Aspect
public class AuthenticationSuccessLogger
{
    private Logger logger=LoggerFactory.getLogger(AuthenticationSuccessLogger.class);



    @Pointcut("within(@org.springframework.stereotype.Repository *)" +
            " || within(@org.springframework.stereotype.Service *)" +
            " || within(@org.springframework.web.bind.annotation.RestController *)")
    public void springBeanPointcut()
    {
        // Method is empty as this is just a Pointcut, the implementations are in the advices.
    }

    /**
     * Pointcut that matches all Spring beans in the application's main packages.
     */
    @Pointcut("within(com.springtesting.repo..*)"+
            " || within(com.springtesting.service..*)"+
            " || within(com.springtesting.web..*) || within(com.springtesting.security.handlers.CustomAuthenticationSuccessHandler..*)")
    public void applicationPackagePointcut()
    {
        // Method is empty as this is just a Pointcut, the implementations are in the advices.
    }


    @Around("applicationPackagePointcut() && springBeanPointcut()")
    public Object logCustomAuthenticationSuccessHandlerPointcut(ProceedingJoinPoint proceedingJoinPoint)
    {
        logger.info("Enter: {}.{}() with argument[s] = {}", proceedingJoinPoint.getSignature().getDeclaringTypeName(),
                proceedingJoinPoint.getSignature().getName(), Arrays.toString(proceedingJoinPoint.getArgs()));

        Object result = null;
        try
        {
            result = proceedingJoinPoint.proceed();
            System.out.println("proceedingJoinPoint.proceed() result: " + result);
        }
        catch (Throwable throwable)
        {
            throwable.printStackTrace();
        }

        logger.info("Exit: {}.{}() with result = {}", proceedingJoinPoint.getSignature().getDeclaringTypeName(),
                proceedingJoinPoint.getSignature().getName(), result);
        return result;
    }

    /**
     * Advice that logs methods throwing exceptions.
     *
     * @param joinPoint join point for advice
     * @param e exception
     */
    @AfterThrowing(pointcut = "applicationPackagePointcut() && springBeanPointcut()", throwing = "e")
    public void logAfterThrowing(JoinPoint joinPoint, Throwable e)
    {
            logger.info("Exception in {}.{}() with cause = {}", joinPoint.getSignature().getDeclaringTypeName(),
                    joinPoint.getSignature().getName(), e.getCause() != null ? e.getCause() : "NULL");

    }

       /*
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


    @Pointcut(value = "execution(* com.springtesting.security.handlers.CustomAuthenticationSuccessHandler.*(..))")
    private void customAuthenticationSuccessHandlerPointcut() {};

    */
}
