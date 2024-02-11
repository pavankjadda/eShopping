package com.pj.eshopping.security.handlers;


import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

import java.io.IOException;

public class CustomLogoutSuccessHandler implements LogoutSuccessHandler {
    private final Logger logger = LoggerFactory.getLogger(CustomLogoutSuccessHandler.class);

    private final RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();


    @Override
    public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        try {
            if (authentication != null) authentication.setAuthenticated(false);
            request.logout();
            String targetUrl = "/login";
            redirectStrategy.sendRedirect(request, response, targetUrl);
        } catch (Exception e) {
            logger.debug("Exception thrown while logging out");
        }

    }
}
