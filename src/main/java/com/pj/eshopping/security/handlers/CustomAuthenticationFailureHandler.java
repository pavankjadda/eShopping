package com.pj.eshopping.security.handlers;

import com.pj.eshopping.constants.SecurityConstants;
import com.pj.eshopping.domain.user.FailedLogin;
import com.pj.eshopping.repo.FailedLoginRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.WebAttributes;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import java.io.IOException;
import java.time.LocalDateTime;

public class CustomAuthenticationFailureHandler implements AuthenticationFailureHandler {
    private final FailedLoginRepository failedLoginRepository;
    private final RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();
    protected Log logger = LogFactory.getLog(this.getClass());

    public CustomAuthenticationFailureHandler(FailedLoginRepository failedLoginRepository) {
        this.failedLoginRepository = failedLoginRepository;
    }


    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException {
        logger.warn("Inside onAuthenticationFailure() method: Login Failed, redirecting to Login Page");
        logger.warn("Exception: {}", exception);

        handle(request, response, exception);
        clearAuthenticationAttributes(request);
        saveRequesterInformation(request);

    }

    private void handle(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException {
        String targetUrl = determineTargetUrl(exception);
        redirectStrategy.sendRedirect(request, response, targetUrl);
    }

    private String determineTargetUrl(AuthenticationException authenticationException) {
        logger.warn("AuthenticationException occurred, message: {}", authenticationException);
        return SecurityConstants.FORM_LOGIN_FAILURE_URL;
    }

    private void clearAuthenticationAttributes(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session == null) return;
        session.removeAttribute(WebAttributes.AUTHENTICATION_EXCEPTION);
    }

    private void saveRequesterInformation(HttpServletRequest request) {
        FailedLogin failedLogin = new FailedLogin();
        failedLogin.setRequesterIpAddress(request.getRemoteAddr());
        failedLogin.setRequesterPort(request.getRemotePort());
        failedLogin.setRequestedMethod(request.getMethod());
        failedLogin.setLocalIpAddress(request.getLocalAddr());
        failedLogin.setLocalPort(request.getLocalPort());
        failedLogin.setServerName(request.getServerName());
        failedLogin.setServerPort(request.getServerPort());
        failedLogin.setBrowserInformation(request.getAuthType());
        failedLogin.setAuthType(request.getAuthType());
        failedLogin.setLoggedDataTime(LocalDateTime.now());

        try {
            failedLoginRepository.saveAndFlush(failedLogin);
        } catch (Exception e) {
            logger.warn("Failed to save requester information. Exception message: {}", e);
        }
    }

}
