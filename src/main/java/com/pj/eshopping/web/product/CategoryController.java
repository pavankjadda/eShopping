package com.pj.eshopping.web.product;

import com.pj.eshopping.domain.category.Category;
import com.pj.eshopping.dto.CategoryDTO;
import com.pj.eshopping.service.CategoryService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Provides API endpoints for Category and related operations
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
@RestController
@RequestMapping("/api/v1/category")
public class CategoryController {
    private final CategoryService service;

    public CategoryController(CategoryService service) {
        this.service = service;
    }

    /**
     * Find all categories.
     *
     * @return List of categories.
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @GetMapping(path = "/list")
    public List<Category> getAllCategories() {
        return service.getAllCategories();
    }

    /**
     * Find category by id.
     *
     * @param id Category id to find.
     *
     * @return Category matching the id.
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @GetMapping(path = "/{id}")
    public Category findCategoryById(@PathVariable Long id, HttpServletRequest request) {
        return service.findById(id, request);
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
    @PostMapping(value = "/create")
    public Category createNewCategory(@RequestBody CategoryDTO categoryDTO) {
        return service.saveAndFlush(categoryDTO);
    }

    /**
     * Update existing category with new information.
     *
     * @param categoryDTO CategoryDTO object that contains the updated category information.
     *
     * @return Category object that was updated.
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @PutMapping(value = "/update")
    public Category updateCategory(@RequestBody CategoryDTO categoryDTO, HttpServletRequest request) {
        return service.updateCategory(categoryDTO, request);
    }

    /**
     * Delete existing category by ID
     *
     * @param id Category id to delete.
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    @DeleteMapping(value = "/delete/{id}")
    public void deleteCategoryById(@PathVariable Long id, HttpServletRequest request) {
        service.deleteCategoryById(id, request);
    }
}