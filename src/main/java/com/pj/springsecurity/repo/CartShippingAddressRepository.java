package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.cart.CartShippingAddress;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CartShippingAddressRepository extends JpaRepository<CartShippingAddress, Long>
{
	Optional<CartShippingAddress> findByCartId(Long id);
}
