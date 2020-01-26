package com.pj.eshopping.repo;

import com.pj.eshopping.domain.order.OrderProductDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderProductDetailRepository extends JpaRepository<OrderProductDetail, Long>
{
}
