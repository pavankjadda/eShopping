package com.pj.eshopping.domain.orderhistory;

import lombok.Data;

import javax.persistence.*;
import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "order_history")
@Data
public class OrderHistory implements Serializable {
    @Serial
    private static final long serialVersionUID = -6699432774798518217L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "order_id")
    private String orderId;

    @OneToOne
    @JoinColumn(name = "order_history_address_id")
    private OrderHistoryAddress orderHistoryAddress;

    @OneToOne
    @JoinColumn(name = "order_history_user_profile")
    private OrderHistoryUserProfile orderHistoryUserProfile;

    @OneToMany
    @JoinColumn(name = "order_history_id", referencedColumnName = "id")
    private List<OrderHistoryProduct> products = new ArrayList<>();

}
