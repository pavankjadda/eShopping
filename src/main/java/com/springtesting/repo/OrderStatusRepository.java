package com.springtesting.repo;

import com.springtesting.model.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OrderStatusRepository extends JpaRepository<OrderStatus,Long>
{
    OrderStatus findByStatus(String status);
}
