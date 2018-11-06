package com.springtesting.security;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class CustomLogoutSuccessHandler implements LogoutSuccessHandler
{
    private Log logger = LogFactory.getLog(this.getClass());

    private RedirectStrategy redirectStrategy=new DefaultRedirectStrategy();

    @Override
    public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException
    {
        try
        {
            authentication.setAuthenticated(false);
            request.logout();
            String targetUrl="/login";
            redirectStrategy.sendRedirect(request,response,targetUrl);
        }
      finally
        {
            logger.debug("Exception thrown while logging out");
        }

    }
}
