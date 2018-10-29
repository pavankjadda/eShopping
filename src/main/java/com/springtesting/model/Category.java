package com.springtesting.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Data
@Table(name = "category")
public class Category
{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @NotNull(message = "Category name must not be null")
    @NotEmpty
    @Column(name = "name", nullable = false)
    private String name;

}
