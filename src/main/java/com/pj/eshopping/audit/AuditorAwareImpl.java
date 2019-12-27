package com.pj.eshopping.audit;

import com.pj.eshopping.security.MyUserDetails;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Optional;

public class AuditorAwareImpl implements AuditorAware<String>
{
	@Override
	public Optional<String> getCurrentAuditor()
	{
		try
		{
			Optional<MyUserDetails> optionalMyUserDetails = Optional.ofNullable(SecurityContextHolder.getContext())
					.map(SecurityContext::getAuthentication)
					.filter(Authentication::isAuthenticated)
					.map(Authentication::getPrincipal)
					.map(MyUserDetails.class::cast);
			return optionalMyUserDetails.map(myUserDetails -> Optional.ofNullable(myUserDetails.getUsername())).orElse(null);
		}
		catch (Exception e)
		{
			return Optional.of("System");
		}

	}
}
