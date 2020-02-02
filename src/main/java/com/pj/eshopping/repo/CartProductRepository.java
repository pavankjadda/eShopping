package com.pj.eshopping.repo;

import com.pj.eshopping.domain.cart.CartProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartProductRepository extends JpaRepository<CartProduct, Long>
{
}
