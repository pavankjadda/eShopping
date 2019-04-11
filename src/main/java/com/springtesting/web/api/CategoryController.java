package com.springtesting.web.api;

import com.springtesting.exceptions.exceptions.CategoryException;
import com.springtesting.model.order.Category;
import com.springtesting.repo.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/category")
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
    public ResponseEntity<Category> findCategoryById(@PathVariable Long id)
    {
        Optional<Category> category=categoryRepository.findById(id);
        if(!category.isPresent())
        {
            throw new CategoryException("Category is not Found");
        }
        return new ResponseEntity<>(category.get(), new HttpHeaders(), HttpStatus.OK);
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

    @PostMapping(path = "/create-categories")
    public List<Category> createNewCategoriesInBatch(@RequestBody List<Category> categories)
    {
        return categoryRepository.saveAll(categories);
    }

    @DeleteMapping(value = "/delete/{id}")
    public void deleteCategoryById(@PathVariable Long id)
    {
        if(!categoryRepository.findById(id).isPresent())
        {
            throw new CategoryException("Category is not Found");
        }
        categoryRepository.deleteById(id);
    }

}
