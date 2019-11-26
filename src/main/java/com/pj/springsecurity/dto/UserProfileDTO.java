package com.pj.springsecurity.dto;

import com.pj.springsecurity.model.user.Address;
import com.pj.springsecurity.model.user.User;
import lombok.Data;

import java.util.List;

@Data
public class UserProfileDTO
{
	private Long id;

	private String firstName;

	private String lastName;

	private String email;

	private String phone;

	private List<Address> addresses;

	private User user;
}
