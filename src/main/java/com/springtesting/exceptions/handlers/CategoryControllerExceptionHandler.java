package com.springtesting.exceptions.handlers;

import com.springtesting.exceptions.exceptions.CategoryException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CategoryControllerExceptionHandler
{
    @ExceptionHandler(CategoryException.class)
    public ResponseEntity<Object> exception(CategoryException exception)
    {
        return new ResponseEntity<>(exception.getMessage(), HttpStatus.NOT_FOUND);
    }

}
