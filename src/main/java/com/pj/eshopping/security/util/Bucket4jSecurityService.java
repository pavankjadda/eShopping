package com.pj.eshopping.security.util;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class Bucket4jSecurityService
{
	public String username()
	{
		String name = SecurityContextHolder.getContext().getAuthentication().getName();
		if (name.equals("anonymousUser"))
		{
			return null;
		}
		return name;
	}
}
