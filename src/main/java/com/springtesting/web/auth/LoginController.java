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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class LoginController
{

    private Logger logger = LoggerFactory.getLogger(LoginController.class);

    private UserRepository userRepository;

    @Autowired
    public LoginController(UserRepository userRepository)
    {
        this.userRepository = userRepository;
    }

    @GetMapping(value = {"/login","/authenticate"})
    public UserDto loginUser()
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        MyUserDetails myUserDetails= (MyUserDetails) authentication.getPrincipal();
        User user=userRepository.findByUsername(myUserDetails.getUsername());

        return copyUser(user);
    }


    @GetMapping(value = {"/","/home"})
    public UserDto validateUserSession(HttpServletRequest request)
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        // If NOT anonymous user, get user info
        if (!(authentication instanceof AnonymousAuthenticationToken))
        {
            MyUserDetails myUserDetails= (MyUserDetails) authentication.getPrincipal();
            User user=userRepository.findByUsername(myUserDetails.getUsername());
            return copyUser(user);
        }
        return null;
    }


    private UserDto copyUser(User user)
    {
        UserDto userDto=new UserDto();
        userDto.setId(user.getId());
        userDto.setFirstName(user.getUserProfile().getFirstName());
        userDto.setLastName(user.getUserProfile().getLastName());
        userDto.setUsername(user.getUsername());
        userDto.setRoles(user.getRoles());
        return userDto;
    }

    /*
    @GetMapping(value = {"/", "/login"})
    public ModelAndView getLoginPage(HttpServletRequest request)
    {
        ModelAndView modelAndView = new ModelAndView();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        // If NOT anonymous user, get user info
        if (!(authentication instanceof AnonymousAuthenticationToken))
        {
            String username = request.getUserPrincipal().getName();
            String sessionValue = getSessionValue(request);

            modelAndView.setViewName("redirect:home");
            return modelAndView;
        }
        else
        {
            modelAndView.addObject("message", "Login Page");
            modelAndView.setViewName("login");
        }
        modelAndView.addObject("message", "Login Page");
        modelAndView.setViewName("login");
        return modelAndView;
    }

    private String getSessionValue(HttpServletRequest request)
    {
        String sessionValue = null;
        Cookie[] cookies = request.getCookies();
        if(cookies!=null)
        for (Cookie cookie : cookies)
        {
            if (cookie.getName().equals("JSESSIONID"))
            {
                sessionValue = cookie.getValue();
            }
        }
        return sessionValue;
    }


    @PostMapping(value = "/login")
    public void validateLoginDetails(@RequestParam("username") String username, @RequestParam("password") String password, final HttpServletRequest request)
    {
        //This is not being executed as Authentication Success Handler redirects page
        System.out.println("Inside validateLoginDetails() method");

        *//*
         System.out.println("Inside validateLoginDetails() method");
        UsernamePasswordAuthenticationToken authReq = new UsernamePasswordAuthenticationToken(username, password);
        Authentication auth = authManager.authenticate(authReq);
        //PreAuthenticatedAuthenticationToken preAuthenticatedAuthenticationToken=new PreAuthenticatedAuthenticationToken();
        SecurityContext sc = SecurityContextHolder.getContext();
        sc.setAuthentication(auth);
        HttpSession session = request.getSession(true);
        session.setAttribute("SPRING_SECURITY_CONTEXT", sc);

        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("home");
        return modelAndView;
         *//*

    }


    @RequestMapping("/user")
    public Principal returnPrincipal(Principal user)
    {
        return user;
    }


    @GetMapping(value = {"/admin", "/admin.html"})
    public ModelAndView loadAdminHomePage(HttpServletRequest request)
    {
        ModelAndView modelAndView = new ModelAndView();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication instanceof AnonymousAuthenticationToken)
            modelAndView.setViewName("redirect:login");

        if (hasAdminRole(authentication.getAuthorities()))
            modelAndView.setViewName("admin");
        else
            modelAndView.setViewName("403");
        return modelAndView;
    }

    private boolean hasAdminRole(Collection<? extends GrantedAuthority> authorities)
    {
        for (GrantedAuthority grantedAuthority : authorities)
        {
            if (grantedAuthority.getAuthority().equals("ROLE_USER"))
            {
                return false;
            }
            else if (grantedAuthority.getAuthority().equals("ROLE_ADMIN"))
            {
                return true;
            }
        }
        return false;
    }*/
}
