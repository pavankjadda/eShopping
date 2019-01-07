package com.springtesting.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Data
@Table(name = "category")
public class Category extends AbstractAuditingEntity
{

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Category name must not be null")
    @NotEmpty
    @Column(name = "name", nullable = false)
    private String name;

    public Category()
    {

    }

    public Category(Long id,  String name)
    {
        this.id = id;
        this.name = name;
    }
}
