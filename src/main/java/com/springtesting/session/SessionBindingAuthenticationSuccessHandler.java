package com.springtesting.session;

import com.springtesting.security.MyUserDetails;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

//@Component("sessionBindingAuthenticationSuccessHandler")
public class SessionBindingAuthenticationSuccessHandler implements AuthenticationSuccessHandler
{
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException
    {
        HttpSession session = request.getSession(false);
        if (session != null)
        {
            MyUserDetails myUserDetails= (MyUserDetails) authentication.getPrincipal();
            //session.setAttribute("customHttpSessionBindingListener", customHttpSessionBindingListener);
        }
    }
}
