package com.pj.eshopping.dto;

import lombok.Data;

@Data
public class RegisterUserDto
{
	private String username;

	private String password;

	private String email;

	public RegisterUserDto()
	{
	}

	public RegisterUserDto(String username, String password, String email)
	{
		this.username = username;
		this.password = password;
		this.email = email;
	}
}
