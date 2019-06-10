package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.category.Category;
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
    @PersistenceContext
    private EntityManager entityManager;

    private final ModelMapper modelMapper;

    public CategoryRepositoryCustomImpl(ModelMapper modelMapper)
    {
        this.modelMapper = modelMapper;
    }

    public List<Category> getAllCategoriesThroughStoredProcedureCustom()
    {
        List<Category> categories=new ArrayList<>();
        StoredProcedureQuery storedProcedureQuery=entityManager.createNamedStoredProcedureQuery("getAllCategoriesThroughStoredProcedureCustom");
        List<?> categoriesResult=storedProcedureQuery.getResultList();

        categoriesResult.forEach(category -> categories.add(modelMapper.map(category, Category.class)));
        return categories;
    }
}
