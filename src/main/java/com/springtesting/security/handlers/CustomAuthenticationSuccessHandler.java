package com.springtesting.security.handlers;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.WebAttributes;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.Collection;


public class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandler
{
    private Log logger = LogFactory.getLog(this.getClass());

    private RedirectStrategy redirectStrategy=new DefaultRedirectStrategy();

    public CustomAuthenticationSuccessHandler()
    {

    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException
    {
        handle(request,response,authentication);
        clearAuthenticationAttributes(request);
    }

    public void handle(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException
    {
        String targetUrl=determineTargetUrl(authentication);
        if(response.isCommitted())
        {
            logger.debug("Response has already been committed. Unable to redirect to " + targetUrl);
            return;
        }
        redirectStrategy.sendRedirect(request,response,targetUrl);
    }

    private String determineTargetUrl(Authentication authentication)
    {
        Collection<? extends GrantedAuthority> authorities= authentication.getAuthorities();
        for (GrantedAuthority grantedAuthority:authorities)
        {

            if(grantedAuthority.getAuthority().equals("ROLE_USER"))
            {
                return "/home.html";
            }
            else if(grantedAuthority.getAuthority().equals("ROLE_ADMIN"))
            {
                return "/admin.html";
            }
        }

        return "/login";
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
