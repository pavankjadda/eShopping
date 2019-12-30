package com.pj.eshopping.exceptions.exceptions;

public class CategoryException extends RuntimeException
{
	private static final long serialVersionUID = 1L;

	private final String message;

	public CategoryException(String message)
	{
		this.message = message;
	}

	@Override
	public String getMessage()
	{
		return message;
	}
}
