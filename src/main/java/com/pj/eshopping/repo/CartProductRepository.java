package com.pj.eshopping.repo;

import com.pj.eshopping.model.cart.CartProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartProductRepository extends JpaRepository<CartProduct, Long>
{
}
