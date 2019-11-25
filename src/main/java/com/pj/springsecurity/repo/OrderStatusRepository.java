package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.order.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OrderStatusRepository extends JpaRepository<OrderStatus, Long>
{
	OrderStatus findByStatus(String status);
}
