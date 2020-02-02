package com.pj.eshopping.repo;

import com.pj.eshopping.domain.category.Category;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;
import java.util.ArrayList;
import java.util.List;


@Repository
public class CategoryRepositoryCustomImpl implements CategoryRepositoryCustom
{
	private final ModelMapper modelMapper;
	@PersistenceContext
	private EntityManager entityManager;

	public CategoryRepositoryCustomImpl(ModelMapper modelMapper)
	{
		this.modelMapper = modelMapper;
	}

	public List<Category> getAllCategoriesThroughStoredProcedureCustom()
	{
		List<Category> categories = new ArrayList<>();
		StoredProcedureQuery storedProcedureQuery = entityManager.createNamedStoredProcedureQuery("getAllCategoriesThroughStoredProcedureCustom");
		List<?> categoriesResult = storedProcedureQuery.getResultList();

		categoriesResult.forEach(category -> categories.add(modelMapper.map(category, Category.class)));
		return categories;
	}
}
