package com.pj.eshopping.security.handlers;

import com.pj.eshopping.domain.security.UnauthorizedRequest;
import com.pj.eshopping.repo.UnauthorizedRequestRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;

import java.time.LocalDateTime;

public class CustomAccessDeniedHandler implements AccessDeniedHandler {
    private final UnauthorizedRequestRepository unauthorizedRequestRepository;
    protected Logger logger = LoggerFactory.getLogger(this.getClass());


    public CustomAccessDeniedHandler(UnauthorizedRequestRepository unauthorizedRequestRepository) {
        this.unauthorizedRequestRepository = unauthorizedRequestRepository;
    }

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) {
        UnauthorizedRequest unauthorizedRequest = new UnauthorizedRequest();
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

        try {
            unauthorizedRequestRepository.saveAndFlush(unauthorizedRequest);
        } catch (Exception e) {
            logger.warn("Exception occurred while handling Access Denied Error. Exception message: ", e);
        }

    }
}
