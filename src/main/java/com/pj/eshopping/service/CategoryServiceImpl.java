package com.pj.eshopping.service;

import com.pj.eshopping.domain.category.Category;
import com.pj.eshopping.dto.CategoryDTO;
import com.pj.eshopping.exceptions.exceptions.GenericException;
import com.pj.eshopping.repo.CategoryRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Service class that handles business logic to get, create, update Categories
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
@Service
@Transactional
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;
    private final ModelMapper modelMapper;

    public CategoryServiceImpl(CategoryRepository categoryRepository, ModelMapper modelMapper) {
        this.categoryRepository = categoryRepository;
        this.modelMapper = modelMapper;
    }

    /**
     * Find all categories.
     *
     * @return List of categories.
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @Override
    @Transactional(readOnly = true)
    public List<Category> getAllCategories() {
        return categoryRepository.getAllCategoriesThroughStoredProcedureCustom();
    }

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
    @Override
    @Transactional(readOnly = true)
    public Category findById(Long id, HttpServletRequest request) {
        return categoryRepository.findById(id).orElseThrow(
                () -> new GenericException("Category with id:%d is not Found".formatted(id), "", HttpStatus.NOT_FOUND, LocalDateTime.now(), null,
                        request.getRequestURI()));
    }

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
    @Override
    public Category saveAndFlush(CategoryDTO categoryDTO) {
        Category category = modelMapper.map(categoryDTO, Category.class);
        return categoryRepository.saveAndFlush(category);
    }

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
    @Override
    public Category updateCategory(CategoryDTO categoryDTO, HttpServletRequest request) {
        var category = findById(categoryDTO.id(), request);
        category.setName(categoryDTO.name());
        category.setDescription(categoryDTO.description());
        return categoryRepository.saveAndFlush(category);
    }

    /**
     * Delete existing category by ID
     *
     * @param id      Category id to delete.
     * @param request HttpServletRequest object.
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @Override
    public void deleteCategoryById(Long id, HttpServletRequest request) {
        categoryRepository.deleteById(id);
    }
}