package com.pj.eshopping.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.HashMap;

@Data
public class GenericResponseDto
{
	private String message;
	private String httpStatus;
	private String httpStatusCode;
	private String exceptionMessage;
	private String exceptionCode;
	private LocalDateTime timeStamp;
	private HashMap<String, String> hashMap;

	public GenericResponseDto()
	{
	}

	public GenericResponseDto(String message, String httpStatus, String httpStatusCode, String exceptionMessage, String exceptionCode, LocalDateTime timeStamp)
	{
		this.message = message;
		this.httpStatus = httpStatus;
		this.httpStatusCode = httpStatusCode;
		this.exceptionMessage = exceptionMessage;
		this.exceptionCode = exceptionCode;
		this.timeStamp = timeStamp;
	}

}
