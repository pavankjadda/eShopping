package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.cart.CartStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CartStatusRepository extends JpaRepository<CartStatus,Long>
{
    Optional<CartStatus> findByStatus(String status);
}
