package com.pj.eshopping.repo;

import com.pj.eshopping.domain.order.OrderShippingAddress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderShippingAddressRepository extends JpaRepository<OrderShippingAddress,Long>
{
}
