package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.cart.CartProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartProductRepository extends JpaRepository<CartProduct, Long>
{
}
