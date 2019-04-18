package com.pj.springsecurity.model.user;


import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "region")
@Data
public class Region implements Serializable
{
    private static final long serialVersionUID = 7515965324996283939L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    @Length(max = 20, min = 2)
    private String name;

    public Region()
    {
    }

    public Region(@Length(max = 20, min = 2) String name)
    {
        this.name = name;
    }
}
