package com.springtesting.model;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;


@Entity
@Data
@Table(name = "user")
public class User
{
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "username")
    private String username;

    @NotNull(message = "First name must not be null")
    @NotEmpty
    @Column(name = "first_name", nullable = false)
    private String firstName;


    @NotNull(message = "Last name must not be null")
    @NotEmpty
    @Column(name = "last_name", nullable = false)
    private String lastName;


    @NotNull(message = "Email must not be null")
    @NotEmpty
    @Column(name = "email", nullable = false)
    private String email;


    @NotNull(message = "Address must not be null")
    @NotEmpty
    @Column(name = "address", nullable = false)
    private String address;

    @NotNull(message = "Address must not be null")
    @NotEmpty
    @Column(name = "password", nullable = false)
    private String password;

}
