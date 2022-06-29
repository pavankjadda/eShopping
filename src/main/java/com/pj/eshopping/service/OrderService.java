package com.pj.eshopping.service;

import com.pj.eshopping.domain.order.Order;

import java.util.List;
import java.util.Optional;

public interface OrderService {
    List<Order> getOrder();

    Optional<Order> getOrderById(Long id);

    Order createOrder();

    Order updateOrder(Order order);

    void deleteOrder(Long id);
}
