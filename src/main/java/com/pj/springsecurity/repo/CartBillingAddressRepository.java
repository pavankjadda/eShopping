package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.cart.CartBillingAddress;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CartBillingAddressRepository extends JpaRepository<CartBillingAddress, Long>
{
	Optional<CartBillingAddress> findByCartId(Long id);
}
