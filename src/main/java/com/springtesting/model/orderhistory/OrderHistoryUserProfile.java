package com.springtesting.model.orderhistory;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "order_history_user_profile")
public class OrderHistoryUserProfile
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_profile_id")
    private Long userProfileId;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "email", nullable = false)
    private String email;
}
