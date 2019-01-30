package com.springtesting.exceptions.exceptions;

public class CategoryException extends RuntimeException
{
    private static final long serialVersionUID = 1L;

    private String message;

    public CategoryException(String message)
    {
        this.message=message;
    }

    public String getMessage()
    {
        return message;
    }
}
