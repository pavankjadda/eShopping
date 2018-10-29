package com.springtesting.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name ="product")
public class Product implements Serializable
{
    @Id
    private String id;

    @NotNull(message = "Product name must not be null")
    @NotEmpty
    @Column(name = "name", nullable = false)
    private String name;


    @ManyToOne
    @JoinColumn(name="category_id")
    private Category category;

    @ManyToMany(mappedBy = "productlist")
    private List<OrderDetail> orderDetail =new ArrayList<OrderDetail>();

}