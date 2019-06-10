package com.pj.springsecurity.repo;

import com.pj.springsecurity.model.category.Category;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;
import java.util.List;

@Repository
public class CategoryRepositoryCustomImpl implements CategoryRepositoryCustom
{
    @PersistenceContext
    private EntityManager entityManager;

    public List<Category> getAllCategoriesThroughStoredProcedureCustom()
    {
        StoredProcedureQuery storedProcedureQuery=entityManager.createNamedStoredProcedureQuery("getAllCategoriesThroughStoredProcedureCustom");
        return storedProcedureQuery.getResultList();
    }
}
