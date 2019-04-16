package com.springtesting.dto;

import com.springtesting.model.user.Role;
import com.springtesting.model.user.UserProfile;
import lombok.Data;

import java.util.Collection;

@Data
public class UserDto
{
    private Long id;

    private String username;

    private String firstName;

    private String lastName;

    private String token;

    private Collection<Role> roles;

    private UserProfile userProfile;


    public UserDto() {}

    public UserDto(Long id, String username, String firstName, String lastName, String token)
    {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.token = token;
    }
}
