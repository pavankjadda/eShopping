package com.pj.springsecurity.exceptions.handlers;

import com.pj.springsecurity.model.exception.ErrorMessage;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;

@ControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler
{
    @ExceptionHandler({AuthenticationException.class})
    public ResponseEntity<Object> handleAccessDeniedException(Exception exception, WebRequest webRequest)
    {
        return new ResponseEntity<>("Authentication Failed", new HttpHeaders(), HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorMessage> handleAllExceptions(Exception exception, WebRequest webRequest)
    {
        ErrorMessage errorMessage=new ErrorMessage(exception.getMessage(),"ErrorTest",HttpStatus.INTERNAL_SERVER_ERROR,
                LocalDateTime.now(), null,null);
        return new ResponseEntity<>(errorMessage,HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

