package com.springtesting.repo;

import com.springtesting.model.cart.CartStatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartStatusRepository extends JpaRepository<CartStatus,Long>
{
}
