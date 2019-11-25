package com.pj.springsecurity.dto;

import com.pj.springsecurity.model.user.Role;
import com.pj.springsecurity.model.user.UserProfile;
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
