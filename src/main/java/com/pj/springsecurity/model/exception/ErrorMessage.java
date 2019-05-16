package com.pj.springsecurity.model.exception;

import lombok.Data;
import org.springframework.http.HttpStatus;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Map;

@Data
public class ErrorMessage implements Serializable
{
    private static final long serialVersionUID = 6330014835965189038L;

    private String message;
    private String errorCode;
    private HttpStatus status;
    private LocalDateTime timestamp;
    private Map<String,String> errors;
    private String path;

    public ErrorMessage(String message, String errorCode, HttpStatus status, LocalDateTime timestamp, Map<String, String> errors, String path)
    {
        super();
        this.message = message;
        this.errorCode = errorCode;
        this.status = status;
        this.timestamp = timestamp;
        this.errors = errors;
        this.path = path;
    }
}
