package com.pj.eshopping.repo;

import com.pj.eshopping.domain.order.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OrderStatusRepository extends JpaRepository<OrderStatus, Long>
{
	OrderStatus findByStatus(String status);
}
