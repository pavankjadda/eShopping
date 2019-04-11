package com.springtesting.repo;

import com.springtesting.model.order.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category,Long>
{

}
