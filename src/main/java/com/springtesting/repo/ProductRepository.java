package com.springtesting.repo;

import com.springtesting.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ProductRepository extends JpaRepository<Product, String>
{


}
