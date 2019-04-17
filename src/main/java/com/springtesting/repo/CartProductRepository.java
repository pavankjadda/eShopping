package com.springtesting.repo;

import com.springtesting.model.cart.CartProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartProductRepository extends JpaRepository<CartProduct,Long>
{
}
