package com.springtesting.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="person")
@Data
public class Person
{
    @Id
    private String id;

    private String firstName;

    private String lastName;

    private String email;

    private String phone;

    public Person()
    {
    }

    public Person(String id, String firstName, String lastName, String email, String phone)
    {
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.phone=phone;
    }
}
