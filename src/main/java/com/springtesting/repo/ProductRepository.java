package com.springtesting.repo;

import com.springtesting.model.order.Product;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductRepository extends JpaRepository<Product, Long>
{


}
