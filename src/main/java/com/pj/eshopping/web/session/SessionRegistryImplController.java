package com.pj.eshopping.web.session;

import com.pj.eshopping.security.MyUserDetails;
import com.pj.eshopping.security.config.AuthorityConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.session.SessionInformation;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/admin/session-registry")
@Secured(value = AuthorityConstants.ROLE_ADMIN)
public class SessionRegistryImplController
{

	private final SessionRegistry sessionRegistry;

	@Autowired
	public SessionRegistryImplController(SessionRegistry sessionRegistry)
	{
		this.sessionRegistry = sessionRegistry;
	}

	@GetMapping(value = {"/users"})
	@Secured(value = AuthorityConstants.ROLE_ADMIN)
	public List<String> getAllUsers()
	{
		return sessionRegistry.getAllPrincipals().stream()
				.filter(user -> !sessionRegistry.getAllSessions(user, false).isEmpty())
				.map(Object::toString)
				.collect(Collectors.toList());
	}

	@GetMapping(value = {"/active-users"})
	@Secured(value = AuthorityConstants.ROLE_ADMIN)
	public List<String> getActiveUsers()
	{
		return sessionRegistry.getAllPrincipals().stream()
				.filter(user -> !sessionRegistry.getAllSessions(user, false).isEmpty())
				.map(Object::toString)
				.collect(Collectors.toList());
	}


	@GetMapping(value = {"/active-users/{username}"})
	@Secured(value = AuthorityConstants.ROLE_ADMIN)
	public List<SessionInformation> getUserSessions(@PathVariable String username)
	{
		MyUserDetails myUserDetails = (MyUserDetails) sessionRegistry.getAllPrincipals().get(0);
		if (myUserDetails.getUsername().equals(username))
			return sessionRegistry.getAllSessions(myUserDetails, false);
		return Collections.emptyList();
	}
}
