package com.pj.eshopping.security.handlers;

import com.pj.eshopping.domain.security.SessionHistory;
import com.pj.eshopping.repo.SessionHistoryRepository;
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
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Collection;


public class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandler
{
	private Log logger = LogFactory.getLog(this.getClass());

	private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

	private SessionHistoryRepository sessionHistoryRepository;


	public CustomAuthenticationSuccessHandler(SessionHistoryRepository sessionHistoryRepository)
	{
		this.sessionHistoryRepository = sessionHistoryRepository;
	}

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException
	{
		handle(request, response, authentication);
		clearAuthenticationAttributes(request);
		saveRequesterInformation(request, authentication);
	}

	private void saveRequesterInformation(HttpServletRequest request, Authentication authentication)
	{
		SessionHistory sessionHistory = new SessionHistory();
		sessionHistory.setSessionId(request.getSession(false).getId());
		sessionHistory.setCreationTime(convertLongTime(request.getSession(false).getCreationTime()));
		sessionHistory.setLastAccessTime(convertLongTime(request.getSession(false).getLastAccessedTime()));
		sessionHistory.setMaxInactiveInterval(request.getSession(false).getMaxInactiveInterval());
		sessionHistory.setLoggedDataTime(LocalDateTime.now());
		sessionHistory.setUsername(authentication.getName());
		sessionHistory.setRequesterIpAddress(request.getRemoteAddr());
		sessionHistory.setRequesterPort(request.getRemotePort());
		sessionHistory.setRequestedMethod(request.getMethod());
		sessionHistory.setLocalIpAddress(request.getLocalAddr());
		sessionHistory.setLocalPort(request.getLocalPort());
		sessionHistory.setServerName(request.getServerName());
		sessionHistory.setServerPort(request.getServerPort());
		sessionHistory.setBrowserInformation(request.getAuthType());
		sessionHistory.setAuthType(request.getAuthType());

		try
		{
			sessionHistoryRepository.saveAndFlush(sessionHistory);
		}
		catch (Exception e)
		{
			logger.info("Failed to save requester information. Exception message ", e);
		}
	}

	private void handle(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException
	{
		String targetUrl = determineTargetUrl(authentication);
		if (response.isCommitted())
		{
			logger.debug("Response has already been committed. Unable to redirect to " + targetUrl);
			return;
		}
		redirectStrategy.sendRedirect(request, response, targetUrl);
	}

	private String determineTargetUrl(Authentication authentication)
	{
		Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
		for (GrantedAuthority grantedAuthority : authorities)
		{

			if (grantedAuthority.getAuthority().equals("ROLE_USER"))
			{
				return "/home.html";
			}
			else if (grantedAuthority.getAuthority().equals("ROLE_ADMIN"))
			{
				return "/admin.html";
			}
		}

		return "/login";
	}

	private void clearAuthenticationAttributes(HttpServletRequest request)
	{
		HttpSession session = request.getSession(false);
		if (session == null)
			return;
		session.removeAttribute(WebAttributes.AUTHENTICATION_EXCEPTION);
	}

	protected RedirectStrategy getRedirectStrategy()
	{
		return redirectStrategy;
	}

	public void setRedirectStrategy(RedirectStrategy redirectStrategy)
	{
		this.redirectStrategy = redirectStrategy;
	}

	private LocalDateTime convertLongTime(long longValue)
	{
		return LocalDateTime.ofInstant(Instant.ofEpochMilli(longValue), ZoneId.systemDefault());
	}
}
