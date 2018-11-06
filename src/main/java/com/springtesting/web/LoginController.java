package com.springtesting.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class LoginController
{
    @Resource(name="authenticationManager")
    private AuthenticationManager authManager;

    @GetMapping(value = {"/","/login"})
    public ModelAndView getLoginPage()
    {

        ModelAndView modelAndView=new ModelAndView();
         /*
        SecurityContext securityContext = SecurityContextHolder.getContext();
        if(securityContext.getAuthentication().isAuthenticated() )
        {
            modelAndView.setViewName("home");
            return modelAndView;
        }*/

        modelAndView.addObject("message", "Login Page");
        modelAndView.setViewName("login");
        return modelAndView;
    }


    @PostMapping(value = "/login")
    public ModelAndView validateLoginDetails(@RequestParam("username") String username, @RequestParam("password") String password, final HttpServletRequest request)
    {
        //Store Session
        UsernamePasswordAuthenticationToken authReq = new UsernamePasswordAuthenticationToken(username, password);
        Authentication auth = authManager.authenticate(authReq);
        SecurityContext sc = SecurityContextHolder.getContext();
        sc.setAuthentication(auth);
        HttpSession session = request.getSession(true);
        session.setAttribute("SPRING_SECURITY_CONTEXT", sc);

        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("home");
        return modelAndView;
    }

    @GetMapping(value = {"/home","/home.html"})
    public ModelAndView loadHomePage()
    {
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("home");
        return modelAndView;
    }
}
