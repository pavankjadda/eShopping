package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.order.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long>
{
}
