package com.pj.eshopping.repo;

import com.pj.eshopping.domain.cart.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Long>
{
	Optional<Cart> findAllByUserProfileUserId(Long id);

}
