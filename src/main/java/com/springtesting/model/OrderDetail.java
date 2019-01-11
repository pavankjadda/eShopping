package com.springtesting.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "order_detail")
public class OrderDetail extends AbstractAuditingEntity
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "order_status")
    private OrderStatus orderStatus;

    @ManyToOne
    @JoinColumn(name = "purchased_By")
    private UserProfile purchasedBy;

    @ManyToOne
    @JoinColumn(name = "shipping_address")
    private Address shippingAddress;

    @Column(name = "order_created_date_time")
    private LocalDateTime orderCreatedDateTime;

    @ManyToMany
    @JoinTable(
            name = "order_detail_products",
            joinColumns = @JoinColumn(name = "order_detail_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "product_id", referencedColumnName = "id"))
    private List<Product> productList = new ArrayList<>();


    public OrderDetail()
    {
    }


    public OrderDetail(Long id, UserProfile purchasedBy, LocalDateTime orderCreatedDateTime, Address shippingAddress, OrderStatus orderStatus)
    {
        this.id = id;
        this.orderStatus = orderStatus;
        this.orderCreatedDateTime = orderCreatedDateTime;
        this.purchasedBy = purchasedBy;
        this.shippingAddress = shippingAddress;
    }

    @Override
    public String toString()
    {
        return "OrderDetail{" +
                "id=" + id +
                ", orderStatus=" + orderStatus +
                ", purchasedBy=" + purchasedBy +
                ", shippingAddress=" + shippingAddress +
                ", orderCreatedDateTime=" + orderCreatedDateTime +
                '}';
    }
}