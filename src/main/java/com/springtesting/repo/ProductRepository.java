package com.springtesting.repo;

import com.springtesting.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductRepository extends JpaRepository<Product, String>
{


}
