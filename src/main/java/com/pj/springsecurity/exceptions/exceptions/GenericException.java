package com.pj.springsecurity.exceptions.exceptions;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;
import java.util.Map;

@EqualsAndHashCode(callSuper = true)
@Data
public class GenericException extends RuntimeException
{
    private final String message;
    private final String errorCode;
    private final HttpStatus status;
    private final LocalDateTime timestamp;
    private final Map<String,String> errors;
    private final String path;


    public GenericException(String message, String errorCode, HttpStatus status, LocalDateTime timestamp, Map<String, String> errors, String path)
    {
        super(message);
        this.message = message;
        this.errorCode = errorCode;
        this.status = status;
        this.timestamp = timestamp;
        this.errors = errors;
        this.path = path;
    }
}
