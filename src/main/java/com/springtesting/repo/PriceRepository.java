package com.springtesting.repo;


import com.springtesting.model.order.Price;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PriceRepository extends JpaRepository<Price, Long>
{
}
