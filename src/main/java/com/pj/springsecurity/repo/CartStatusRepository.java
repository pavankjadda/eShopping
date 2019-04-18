package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.cart.CartStatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartStatusRepository extends JpaRepository<CartStatus,Long>
{
}
