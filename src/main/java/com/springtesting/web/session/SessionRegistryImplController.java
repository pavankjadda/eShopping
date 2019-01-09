package com.springtesting.web.session;

import com.springtesting.security.MyUserDetails;
import com.springtesting.security.MyUserDetailsService;
import com.springtesting.security.config.AuthorityConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.session.SessionInformation;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/admin/session-registry")
@Secured(value = AuthorityConstants.Admin)
public class SessionRegistryImplController
{

    private final SessionRegistry sessionRegistry;

    @Autowired
    public SessionRegistryImplController(SessionRegistry sessionRegistry)
    {
        this.sessionRegistry = sessionRegistry;
    }

    @GetMapping(value = {"/users"})
    @Secured(value = AuthorityConstants.Admin)
    public List<String> getAllUsers()
    {
        return sessionRegistry.getAllPrincipals().stream()
                .filter(user -> !sessionRegistry.getAllSessions(user, false).isEmpty())
                .map(Object::toString)
                .collect(Collectors.toList());
    }

    @GetMapping(value = {"/active-users"})
    @Secured(value = AuthorityConstants.Admin)
    public List<String> getActiveUsers()
    {
        return sessionRegistry.getAllPrincipals().stream()
                .filter(user -> !sessionRegistry.getAllSessions(user, false).isEmpty())
                .map(Object::toString)
                .collect(Collectors.toList());
    }


    @GetMapping(value = {"/active-users/{username}"})
    @Secured(value = AuthorityConstants.Admin)
    public List<SessionInformation> getUserSessions(@PathVariable String username)
    {
        //return sessionRegistry.getAllSessions(myUserDetailsService.loadUserByUsername(username),false);

        MyUserDetails myUserDetails = (MyUserDetails) sessionRegistry.getAllPrincipals().get(0);
        if (myUserDetails.getUsername().equals(username))
            return sessionRegistry.getAllSessions(myUserDetails, false);
        return null;
    }
}
