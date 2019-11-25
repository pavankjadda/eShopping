package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.category.Category;

import java.util.List;

public interface CategoryRepositoryCustom
{
	List<Category> getAllCategoriesThroughStoredProcedureCustom();
}
