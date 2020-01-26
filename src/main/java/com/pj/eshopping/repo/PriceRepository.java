package com.pj.eshopping.repo;


import com.pj.eshopping.domain.product.Price;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PriceRepository extends JpaRepository<Price, Long>
{
}
