package com.springtesting.web;

import com.springtesting.model.User;
import com.springtesting.security.MyUserDetails;
import com.springtesting.security.MyUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.session.SessionInformation;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/admin/session-registry")
public class SessionRegistryImplController
{
    private final SessionRegistry sessionRegistry;
    private final MyUserDetailsService myUserDetailsService;

    @Autowired
    public SessionRegistryImplController(SessionRegistry sessionRegistry, MyUserDetailsService myUserDetailsService)
    {
        this.sessionRegistry = sessionRegistry;
        this.myUserDetailsService=myUserDetailsService;
    }

    @GetMapping(value = {"/users"})
    public List<String> getAllUsers()
    {
        return sessionRegistry.getAllPrincipals().stream()
                .filter(user -> !sessionRegistry.getAllSessions(user,false).isEmpty())
                .map(Object::toString)
                .collect(Collectors.toList());
    }

    @GetMapping(value = {"/active-users"})
    public List<String> getActiveUsers()
    {
        return sessionRegistry.getAllPrincipals().stream()
                .filter(user -> !sessionRegistry.getAllSessions(user,false).isEmpty())
                .map(Object::toString)
                .collect(Collectors.toList());
    }


    @GetMapping(value = {"/active-users/{username}"})
    public List<SessionInformation> getUserSessions(@PathVariable String username)
    {
        //return sessionRegistry.getAllSessions(myUserDetailsService.loadUserByUsername(username),false);

        MyUserDetails myUserDetails= (MyUserDetails)sessionRegistry.getAllPrincipals().get(0);
        if(myUserDetails.getUsername().equals(username))
            return sessionRegistry.getAllSessions(myUserDetails, false);
        return null;
    }
}
