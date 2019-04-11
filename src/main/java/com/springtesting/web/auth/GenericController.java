package com.springtesting.web.auth;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class GenericController
{
    @GetMapping(value = {"/","/login"})
    public ModelAndView redirectToHome()
    {
        return new ModelAndView("redirect:login.html");
    }
}
