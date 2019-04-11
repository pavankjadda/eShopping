package com.springtesting.model.user;


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
    private Long userId;

    @Column(name = "role_id")
    private Long roleId;

    public UserRole()
    {
    }

}
