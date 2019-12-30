package com.pj.eshopping.repo;

import com.pj.eshopping.model.order.OrderBillingAddress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderBillingAddressRepository extends JpaRepository<OrderBillingAddress,Long>
{
}
