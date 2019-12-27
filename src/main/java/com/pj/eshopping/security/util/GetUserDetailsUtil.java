package com.pj.eshopping.security.util;

import com.pj.eshopping.security.MyUserDetails;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class GetUserDetailsUtil
{
	public String getUserPrincipalName()
	{
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

		// If NOT anonymous user, get user info
		if (!(authentication instanceof AnonymousAuthenticationToken))
		{
			MyUserDetails myUserDetails = (MyUserDetails) authentication.getPrincipal();
			return myUserDetails.getUsername();
		}
		return "";
	}
}
