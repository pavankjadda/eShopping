package com.pj.eshopping.security.handlers;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
	private Logger logger = LoggerFactory.getLogger(CustomLogoutSuccessHandler.class);

	private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();


	@Override
	public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException
	{
		try
		{
			if (authentication != null)
				authentication.setAuthenticated(false);
			request.logout();
			String targetUrl = "/login";
			redirectStrategy.sendRedirect(request, response, targetUrl);
		}
		catch (Exception e)
		{
			logger.debug("Exception thrown while logging out");
		}

	}
}
