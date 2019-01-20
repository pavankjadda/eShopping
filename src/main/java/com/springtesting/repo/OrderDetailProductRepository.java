package com.springtesting.repo;

import com.springtesting.model.OrderDetailProduct;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderDetailProductRepository extends JpaRepository<OrderDetailProduct, Long>
{
    List<OrderDetailProduct> findByOrderDetailId(Long orderId);
}
