package com.springtesting.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "product")
public class Product implements Serializable
{
    @Id
    private String id;

    @Column(name = "name", nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToMany
    @JoinTable(
            name = "product_price",
            joinColumns = @JoinColumn(name = "product_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "price_id", referencedColumnName = "id")
    )
    @JsonManagedReference
    private List<Price> priceList = new ArrayList<>();

    @JsonIgnore
    @ManyToMany(mappedBy = "productList")
    private List<OrderDetail> ordersList = new ArrayList<OrderDetail>();


    public Product()
    {
    }

    public Product(String id, String name, Category category)
    {
        this.id = id;
        this.name = name;
        this.category = category;
    }
}