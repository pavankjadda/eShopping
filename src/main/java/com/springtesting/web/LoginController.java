package com.springtesting.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController
{

    @GetMapping(value = "/")
    public ModelAndView redirectToLoginPage()
    {
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.addObject("message", "Login Page");
        modelAndView.setViewName("login");
        return modelAndView;
    }

    @GetMapping(value = "/login")
    public ModelAndView getLoginPage()
    {
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.addObject("message", "Login Page");
        modelAndView.setViewName("login");
        return modelAndView;
    }


    @PostMapping(value = "/login")
    public ModelAndView validateLoginDetails(@RequestParam("username") String username, @RequestParam("password") String password)
    {
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("home");
        return modelAndView;
    }

    @GetMapping(value = "/home")
    public ModelAndView loadHomePage()
    {
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.setViewName("home");
        return modelAndView;
    }
}
