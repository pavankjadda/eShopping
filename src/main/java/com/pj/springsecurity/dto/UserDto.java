package com.pj.springsecurity.dto;

import com.pj.springsecurity.model.user.Role;
import com.pj.springsecurity.model.user.UserProfile;
import lombok.Data;

import java.io.Serializable;
import java.util.Collection;
import java.util.Objects;

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

    @Override
    public String toString()
    {
        return "UserDto{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o)
    {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        UserDto userDto = (UserDto) o;
        return id.equals(userDto.id) &&
                Objects.equals(username, userDto.username);
    }

    @Override
    public int hashCode()
    {
        return Objects.hash(id, username);
    }
}
