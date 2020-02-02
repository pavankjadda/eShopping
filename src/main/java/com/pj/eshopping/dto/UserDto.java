package com.pj.eshopping.dto;

import com.pj.eshopping.domain.user.Role;
import com.pj.eshopping.domain.user.UserProfile;
import lombok.Data;

import java.io.Serializable;
import java.util.Collection;

@Data
public class UserDto implements Serializable
{
	private static final long serialVersionUID = -7294904497247619478L;

	private Long id;
	private String username;
	private String firstName;
	private String lastName;
	private String token;
	private Collection<Role> roles;
	private UserProfile userProfile;
}
