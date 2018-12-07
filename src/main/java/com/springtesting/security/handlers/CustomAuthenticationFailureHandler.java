package com.springtesting.security.handlers;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.WebAttributes;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class CustomAuthenticationFailureHandler implements AuthenticationFailureHandler
{
    protected Log logger = LogFactory.getLog(this.getClass());

    private RedirectStrategy redirectStrategy=new DefaultRedirectStrategy();


    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException
    {
        System.out.println("Inside onAuthenticationFailure() method: Login Failed, redirecting to Login Page");
        System.out.println("Exception: "+exception.toString());
        handle(request,response,exception);
        clearAuthenticationAttributes(request);
    }

    private void handle(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException
    {
        String targetUrl=determineTargetUrl(exception);
        redirectStrategy.sendRedirect(request,response,targetUrl);
    }

    private String determineTargetUrl(AuthenticationException authentication)
    {
        return "/login.html";
    }

    private void clearAuthenticationAttributes(HttpServletRequest request)
    {
        HttpSession session=request.getSession(false);
        if(session == null)
            return;
        session.removeAttribute(WebAttributes.AUTHENTICATION_EXCEPTION);
    }

    public void setRedirectStrategy(RedirectStrategy redirectStrategy)
    {
        this.redirectStrategy = redirectStrategy;
    }
    protected RedirectStrategy getRedirectStrategy()
    {
        return redirectStrategy;
    }
}
