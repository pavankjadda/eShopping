package com.pj.springsecurity.dto;

import com.pj.springsecurity.model.user.Address;
import com.pj.springsecurity.model.user.User;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class UserProfileDTO  implements Serializable
{
    private static final long serialVersionUID = -2453179532501326192L;

    private Long id;

    private String firstName;

    private String lastName;

    private String email;

    private String phone;

    private List<Address> addresses;

    private User user;
}
