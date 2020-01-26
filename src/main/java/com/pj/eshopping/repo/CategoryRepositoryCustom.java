package com.pj.eshopping.repo;

import com.pj.eshopping.domain.category.Category;

import java.util.List;

public interface CategoryRepositoryCustom
{
	List<Category> getAllCategoriesThroughStoredProcedureCustom();
}
