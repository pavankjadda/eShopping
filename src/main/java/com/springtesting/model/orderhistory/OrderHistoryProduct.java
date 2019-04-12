package com.springtesting.model.orderhistory;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Data
@Table(name = "order_history_product")
public class OrderHistoryProduct implements Serializable
{
    private static final long serialVersionUID = -6699422774898518217L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "product_id")
    private Long productId;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "category_id")
    private Long categoryId;

    @Column(name = "category_name")
    private String categoryName;

    @Column(name = "price")
    private Double price;
}
