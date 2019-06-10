package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.category.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category,Long>
{
    //@Procedure(procedureName="get_all_categories")
    @Query(value = "CALL get_all_categories;",nativeQuery = true)
    List<Category> getAllCategoriesThroughStoredProcedure();
}
