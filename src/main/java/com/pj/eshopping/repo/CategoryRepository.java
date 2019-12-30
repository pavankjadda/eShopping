package com.pj.eshopping.repo;

import com.pj.eshopping.model.category.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long>, CategoryRepositoryCustom
{
	//@Procedure(name="getAllCategoriesThroughStoredProcedureCustom")
	//@Query(value = "CALL get_all_categories;",nativeQuery = true)
	//List<Category> getAllCategoriesThroughStoredProcedure();
}
