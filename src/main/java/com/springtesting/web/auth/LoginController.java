package com.springtesting.web.auth;

import com.springtesting.dto.UserDto;
import com.springtesting.model.User;
import com.springtesting.repo.UserRepository;
import com.springtesting.security.MyUserDetails;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
public class LoginController
{

    private Logger logger = LoggerFactory.getLogger(LoginController.class);

    private UserRepository userRepository;

    private final SessionRegistry sessionRegistry;

    @Autowired
    public LoginController(UserRepository userRepository, SessionRegistry sessionRegistry)
    {
        this.userRepository = userRepository;
        this.sessionRegistry = sessionRegistry;
    }

    @GetMapping(value = {"/login","/authenticate"})
    public UserDto loginUser(HttpServletRequest request, HttpSession httpSession)
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return copyUser(authentication,request);
    }


    @GetMapping(value = {"/","/home"})
    public UserDto validateUserSession(HttpServletRequest request)
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        // If NOT anonymous user, get user info
        if (!(authentication instanceof AnonymousAuthenticationToken))
        {
            return copyUser(authentication,request);
        }
        return null;
    }

    @GetMapping(value = {"/isvalidsession"})
    public UserDto isValidSession(HttpServletRequest request)
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        // If NOT anonymous user, get user info
        if (!(authentication instanceof AnonymousAuthenticationToken))
        {
            return copyUser(authentication,request);
        }
        return null;
    }


    private UserDto copyUser(Authentication authentication, HttpServletRequest request)
    {
        MyUserDetails myUserDetails= (MyUserDetails) authentication.getPrincipal();
        User user=userRepository.findByUsername(myUserDetails.getUsername());
        String token=request.getSession(false).getId();

        UserDto userDto=new UserDto();
        userDto.setId(user.getId());
        userDto.setFirstName(user.getUserProfile().getFirstName());
        userDto.setLastName(user.getUserProfile().getLastName());
        userDto.setUsername(user.getUsername());
        userDto.setRoles(user.getRoles());
        userDto.setToken(token);
        return userDto;
    }

}
