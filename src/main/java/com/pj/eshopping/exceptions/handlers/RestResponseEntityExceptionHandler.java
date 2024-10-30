package com.pj.eshopping.exceptions.handlers;

import com.pj.eshopping.domain.exception.ErrorMessage;
import com.pj.eshopping.exceptions.exceptions.GenericException;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {
    private final ModelMapper mapper;

    public RestResponseEntityExceptionHandler(ModelMapper mapper) {
        this.mapper = mapper;
    }

    @ExceptionHandler({AuthenticationException.class})
    public ResponseEntity<Object> handleAccessDeniedException() {
        return new ResponseEntity<>("Authentication Failed", new HttpHeaders(), HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(GenericException.class)
    public ResponseEntity<ErrorMessage> handleGenericExceptions(GenericException genericException) {
        var errorMessage = mapper.map(genericException, ErrorMessage.class);
        errorMessage.setStatusCode(errorMessage.getStatus().value());
        return new ResponseEntity<>(errorMessage, errorMessage.getStatus());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorMessage> handleAllExceptions(Exception exception) {
        var errorMessage = mapper.map(exception, ErrorMessage.class);
        return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}