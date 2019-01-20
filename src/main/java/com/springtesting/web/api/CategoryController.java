package com.springtesting.web.api;

import com.springtesting.model.Category;
import com.springtesting.repo.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v2/category")
public class CategoryController
{
    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryController(CategoryRepository categoryRepository)
    {
        this.categoryRepository = categoryRepository;
    }

    @GetMapping(path = "/list")
    public List<Category> getAllCategories()
    {
        return categoryRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public Optional<Category> findCategoryById(@PathVariable Long id)
    {
        return categoryRepository.findById(id);
    }

    @PostMapping(value = "/create")
    public Category createNewCategory(@RequestBody Category category)
    {
        return categoryRepository.saveAndFlush(category);
    }

    @PutMapping(value = "/update")
    public Category updateCategory(@RequestBody Category category)
    {
        return categoryRepository.saveAndFlush(category);
    }

    @PostMapping(path = "/createmultiplecategories")
    public List<Category> createNewCategoriesInBatch(@RequestBody List<Category> categories)
    {
        return categoryRepository.saveAll(categories);
    }

    @DeleteMapping(value = "/delete/{id}")
    public void deleteCategoryById(@PathVariable Long id)
    {
        categoryRepository.deleteById(id);
    }

}
