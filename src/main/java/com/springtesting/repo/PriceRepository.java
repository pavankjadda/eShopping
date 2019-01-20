package com.springtesting.repo;


import com.springtesting.model.Price;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PriceRepository extends JpaRepository<Price, Long>
{
}
