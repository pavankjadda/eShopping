package com.springtesting.dto;

import com.springtesting.model.UserProfile;

public class UserDto
{
    private Long id;

    private String username;

    private Boolean active;

    private Boolean credentialsNonExpired;

    private Boolean accountNonLocked;

    private Boolean accountNonExpired;

    private UserProfile userProfile;

    public UserDto() {};
    public UserDto(Long id, String username, Boolean active, Boolean credentialsNonExpired, Boolean accountNonLocked, Boolean accountNonExpired, UserProfile userProfile)
    {
        this.id = id;
        this.username = username;
        this.active = active;
        this.credentialsNonExpired = credentialsNonExpired;
        this.accountNonLocked = accountNonLocked;
        this.accountNonExpired = accountNonExpired;
        this.userProfile = userProfile;
    }

}
