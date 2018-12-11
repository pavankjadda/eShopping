package com.springtesting.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.Collection;

@Controller
public class LoginController
{
    private Logger log=LoggerFactory.getLogger(LoginController.class);

    @Resource(name="authenticationManager")
    private AuthenticationManager authManager;

    @GetMapping(value = {"/","/login"})
    public ModelAndView getLoginPage(HttpServletRequest request)
    {
        ModelAndView modelAndView=new ModelAndView();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        // If NOT anonymous user, get user info
        if (!(authentication instanceof AnonymousAuthenticationToken))
        {
            String username=request.getUserPrincipal().getName();
            String sessionValue=getSessionValue(request);

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
        String sessionValue=null;
        Cookie[] cookies=request.getCookies();
        for(Cookie cookie: cookies)
        {
            if(cookie.getName().equals("JSESSIONID"))
            {
                sessionValue=cookie.getValue();
            }
        }
        return sessionValue;
    }


    @PostMapping(value = "/login")
    public void validateLoginDetails(@RequestParam("username") String username, @RequestParam("password") String password, final HttpServletRequest request)
    {
        //This is not being executed as Authentication Success Handler redirects page
        System.out.println("Inside validateLoginDetails() method");

        /*
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
         */

    }


    @GetMapping(value = {"/home","/home.html"})
    public ModelAndView loadHomePage(HttpServletRequest request)
    {
        ModelAndView modelAndView=new ModelAndView();
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        if(authentication instanceof AnonymousAuthenticationToken)
        {
            modelAndView.setViewName("redirect:login");
            return modelAndView;
        }

        modelAndView.setViewName("home");
        return modelAndView;
    }

    @GetMapping(value = {"/admin","/admin.html"})
    public ModelAndView loadAdminHomePage(HttpServletRequest request)
    {
        ModelAndView modelAndView=new ModelAndView();
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        if(authentication instanceof AnonymousAuthenticationToken)
            modelAndView.setViewName("redirect:login");

        if(hasAdminRole(authentication.getAuthorities()))
            modelAndView.setViewName("admin");
        else
            modelAndView.setViewName("403");
        return modelAndView;
    }

    private boolean hasAdminRole(Collection<? extends GrantedAuthority> authorities)
    {
        for (GrantedAuthority grantedAuthority:authorities)
        {
            if(grantedAuthority.getAuthority().equals("ROLE_USER"))
            {
                return false;
            }
            else if(grantedAuthority.getAuthority().equals("ROLE_ADMIN"))
            {
                return true;
            }
        }
        return false;
    }
}
