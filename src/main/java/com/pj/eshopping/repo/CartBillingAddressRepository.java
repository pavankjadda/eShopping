package com.pj.eshopping.repo;

import com.pj.eshopping.domain.cart.CartBillingAddress;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CartBillingAddressRepository extends JpaRepository<CartBillingAddress, Long>
{
	Optional<CartBillingAddress> findByCartId(Long id);
}
