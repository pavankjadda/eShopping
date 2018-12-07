package com.springtesting.model.orderhistory;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Data
@Table(name ="order_history_product")
public class OrderHistoryProduct
{
    @Id
    private String id;

    @Column(name = "product_id")
    private String productId;


    @Column(name = "name", nullable = false)
    private String name;

    @Column(name="category_id")
    private String category;

    @Column(name = "price")
    private String price;
}
