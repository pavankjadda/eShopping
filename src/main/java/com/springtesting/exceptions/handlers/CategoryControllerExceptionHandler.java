package com.springtesting.exceptions.handlers;

import org.springframework.web.bind.annotation.ControllerAdvice;

@ControllerAdvice
public class CategoryControllerExceptionHandler
{

   /* @ExceptionHandler(CategoryException.class)
    public ResponseEntity<Object> exception(CategoryException exception)
    {
        return new ResponseEntity<>(exception.getMessage(), HttpStatus.NOT_FOUND);
    }*/

}
