package com.springtesting.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Table(name = "order_detail")
public class OrderDetail
{

    @Id
    private String id;

    @ManyToOne
    @JoinColumn(name = "purchased_By")
    private User PurchasedBy;


    @ManyToMany
    @JoinTable(
            name = "order_detail_productlist",
            joinColumns = @JoinColumn(name = "order_detail_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "productlist_id", referencedColumnName = "id"))
    private Set<Product> productlist = new HashSet<Product>();
}