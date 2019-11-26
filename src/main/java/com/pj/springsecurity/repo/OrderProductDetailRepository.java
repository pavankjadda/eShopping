package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.order.OrderProductDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderProductDetailRepository extends JpaRepository<OrderProductDetail, Long>
{
}
