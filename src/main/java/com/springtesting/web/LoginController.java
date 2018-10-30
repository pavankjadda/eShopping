package com.springtesting.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController
{
    @GetMapping(value = "/login")
    public ModelAndView getLoginPage()
    {
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.addObject("message", "Login Page");
        modelAndView.setViewName("login");
        return modelAndView;
    }

}
