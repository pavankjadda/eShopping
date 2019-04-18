package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.order.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category,Long>
{

}
