package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.cart.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Long>
{
	Optional<Cart> findAllByUserProfileUserId(Long id);

}
