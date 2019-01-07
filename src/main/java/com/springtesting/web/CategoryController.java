package com.springtesting.web;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.springtesting.model.Category;
import com.springtesting.repo.CategoryRepository;
import com.springtesting.security.util.GetUserDetailsUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v2/category")
public class CategoryController
{
    private final CategoryRepository categoryRepository;
    private final GetUserDetailsUtil getUserDetailsUtil;

    @Autowired
    public CategoryController(CategoryRepository categoryRepository, GetUserDetailsUtil getUserDetailsUtil)
    {
        this.categoryRepository = categoryRepository;
        this.getUserDetailsUtil = getUserDetailsUtil;
    }

    @GetMapping(path = "/list")
    public List<Category> getAllCategories()
    {
        return categoryRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public Optional<Category> findCategoryById(@PathVariable String id)
    {
        return categoryRepository.findById(id);
    }

    @PostMapping(value = "/create")
    public Category createNewCategory(@RequestBody Category category)
    {
        //validateCategory(category);
        return categoryRepository.saveAndFlush(category);
    }

    @PutMapping(value = "/update")
    public Category updateCategory(@RequestBody Category category)
    {
        validateCategory(category);
        return categoryRepository.saveAndFlush(category);
    }

    @PostMapping(path = "/createmultiplecategories")
    public List<Category> createNewCategoriesInBatch(@RequestBody List<Category> categories)
    {
        return categoryRepository.saveAll(categories);
    }


    private void validateCategory(Category category)
    {
        String username=getUserDetailsUtil.getUserPrincipalName();
        if(category.getCreatedBy() == null)
            category.setCreatedBy(username);
        if(category.getCreatedBy() == null)
            category.setLastModifiedBy(username);
        category.setCreatedDate(LocalDateTime.now());
        category.setLastModifiedDate(LocalDateTime.now());
    }

}
