package com.springtesting.security.handlers;

import com.springtesting.model.UnauthorizedRequest;
import com.springtesting.repo.UnauthorizedRequestRepository;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.time.LocalDateTime;

public class CustomAccessDeniedHandler implements AccessDeniedHandler
{
    private UnauthorizedRequestRepository unauthorizedRequestRepository;


    public CustomAccessDeniedHandler(UnauthorizedRequestRepository unauthorizedRequestRepository)
    {
        this.unauthorizedRequestRepository=unauthorizedRequestRepository;
    }

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException )
    {
        UnauthorizedRequest unauthorizedRequest=new UnauthorizedRequest();
        unauthorizedRequest.setRequesterIpAddress(request.getRemoteAddr());
        unauthorizedRequest.setRequesterPort(request.getRemotePort());
        unauthorizedRequest.setRequestedMethod(request.getMethod());
        unauthorizedRequest.setLocalIpAddress(request.getLocalAddr());
        unauthorizedRequest.setLocalPort(request.getLocalPort());
        unauthorizedRequest.setServerName(request.getServerName());
        unauthorizedRequest.setServerPort(request.getServerPort());
        unauthorizedRequest.setBrowserInformation(request.getAuthType());
        unauthorizedRequest.setAuthType(request.getAuthType());
        unauthorizedRequest.setExceptionMessage(accessDeniedException.getMessage());
        unauthorizedRequest.setLoggedDataTime(LocalDateTime.now());

        try
        {
            unauthorizedRequestRepository.saveAndFlush(unauthorizedRequest);
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }

    }
}
