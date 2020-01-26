package com.pj.eshopping.domain.exception;

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
	private Integer statusCode;
	private LocalDateTime timestamp;
	private Map<String, String> errors;
	private String path;

}
