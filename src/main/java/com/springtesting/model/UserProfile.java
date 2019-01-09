package com.springtesting.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "user_profile")
public class UserProfile extends AbstractAuditingEntity
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;


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


    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id")
    private List<Address> addresses = new ArrayList<>();


    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;
}
