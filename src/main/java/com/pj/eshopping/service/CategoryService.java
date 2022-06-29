package com.pj.eshopping.service;

import com.pj.eshopping.domain.category.Category;
import com.pj.eshopping.dto.CategoryDTO;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface CategoryService {
    /**
     * Find all categories.
     *
     * @return List of categories.
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    List<Category> getAllCategories();

    /**
     * Find category by id.
     *
     * @param id      Category id to find.
     * @param request HttpServletRequest object.
     *
     * @return Category matching the id.
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    Category findById(Long id, HttpServletRequest request);


    /**
     * Create a new category and save it in the database.
     *
     * @param categoryDTO CategoryDTO object that contains the new category information.
     *
     * @return Category object that was created.
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    Category saveAndFlush(CategoryDTO categoryDTO);

    /**
     * Update existing category with new information.
     *
     * @param categoryDTO CategoryDTO object that contains the updated category information.
     * @param request     HttpServletRequest object.
     *
     * @return Category object that was updated.
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    Category updateCategory(CategoryDTO categoryDTO, HttpServletRequest request);

    /**
     * Delete existing category by ID
     *
     * @param id Category id to delete.
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    void deleteCategoryById(Long id, HttpServletRequest request);
}
