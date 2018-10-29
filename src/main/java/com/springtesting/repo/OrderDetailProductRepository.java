package com.springtesting.repo;

import com.springtesting.model.OrderDetailProduct;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface OrderDetailProductRepository extends JpaRepository<OrderDetailProduct,String>
{
    List<OrderDetailProduct> findByOrderDetailId(String orderId);
}
