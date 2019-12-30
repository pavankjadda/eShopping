package com.pj.eshopping.security.handlers;

import org.springframework.security.access.AccessDecisionManager;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class UsersAccessDecisionManager implements AccessDecisionManager
{
	@Override
	public void decide(Authentication authentication, Object object, Collection<ConfigAttribute> configAttributes)
	{
		Collection<? extends GrantedAuthority> grantedAuthorities = authentication.getAuthorities();
		for (GrantedAuthority grantedAuthority : grantedAuthorities)
		{
			if (!grantedAuthority.getAuthority().equals("ROLE_ADMIN"))
				throw new AccessDeniedException("You are not allowed to access this page");
		}

	}

	@Override
	public boolean supports(ConfigAttribute attribute)
	{
		return false;
	}

	@Override
	public boolean supports(Class<?> clazz)
	{
		return false;
	}
}
