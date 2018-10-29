package com.springtesting.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "order_detail_productlist")
public class OrderDetailProduct
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "order_detail_id")
    private String orderDetailId;

    @Column(name = "productlist_id")
    private String productListId;


    public OrderDetailProduct()
    {
    }

    public OrderDetailProduct( String orderDetailId, String productListId)
    {
        this.orderDetailId = orderDetailId;
        this.productListId = productListId;
    }
}
