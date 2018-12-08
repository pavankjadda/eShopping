package com.springtesting.model;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "user_role")
public class UserRole
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private String userId;

    @Column(name = "role_id")
    private String roleId;

    public UserRole()
    {
    }

    public UserRole(String userId, String roleId)
    {
        this.userId = userId;
        this.roleId = roleId;
    }
}
