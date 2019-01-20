package com.springtesting.model.orderhistory;

import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "order_history")
@Data
public class OrderHistory
{
    @Id
    private String Id;

    @Column(name = "order_id")
    private String orderId;

    @ManyToOne
    @JoinColumn(name = "order_history_address_id")
    private OrderHistoryAddress orderHistoryAddress;

    @ManyToOne
    @JoinColumn(name = "order_history_user_profile")
    private OrderHistoryUserProfile orderHistoryUserProfile;

    @ManyToMany
    @JoinTable(
            name = "order_history_detail_productlist",
            joinColumns = @JoinColumn(name = "order_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "product_id", referencedColumnName = "id"))
    private Set<OrderHistoryProduct> productlist = new HashSet<OrderHistoryProduct>();


}
