package com.springtesting.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "order_detail")
public class OrderDetail
{

    @Id
    private String id;

    @ManyToOne
    @JoinColumn(name = "order_status")
    private OrderStatus orderStatus;

    @ManyToOne
    @JoinColumn(name = "purchased_By")
    private UserProfile purchasedBy;

    @ManyToOne
    @JoinColumn(name = "shipping_address")
    private Address address;

    @Column(name = "order_created_date_time")
    private LocalDateTime localDateTime;

    @ManyToMany
    @JoinTable(
            name = "order_detail_productlist",
            joinColumns = @JoinColumn(name = "order_detail_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "productlist_id", referencedColumnName = "id"))
    private List<Product> productList = new ArrayList<>();


    public OrderDetail() {}


    public OrderDetail(String id, UserProfile purchasedBy, LocalDateTime localDateTime,Address address,OrderStatus orderStatus)
    {
        this.id = id;
        this.orderStatus=orderStatus;
        this.localDateTime=localDateTime;
        this.purchasedBy = purchasedBy;
        this.address = address;
    }

    public OrderDetail(String id, OrderStatus orderStatus, UserProfile purchasedBy, Address address, LocalDateTime localDateTime, List<Product> productList)
    {
        this.id = id;
        this.orderStatus = orderStatus;
        this.purchasedBy = purchasedBy;
        this.address = address;
        this.localDateTime = localDateTime;
        this.productList = productList;
    }
}