package com.pj.springsecurity.repo;


import com.pj.springsecurity.model.product.Price;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PriceRepository extends JpaRepository<Price, Long>
{
}
