package com.pj.eshopping.dto;

import com.pj.eshopping.domain.user.Address;
import com.pj.eshopping.domain.user.User;
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
