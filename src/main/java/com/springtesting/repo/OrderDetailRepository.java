package com.springtesting.repo;

import com.springtesting.model.order.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long>
{
}
