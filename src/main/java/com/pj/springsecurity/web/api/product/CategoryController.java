package com.pj.springsecurity.web.api.product;

import com.pj.springsecurity.dto.CategoryDTO;
import com.pj.springsecurity.exceptions.exceptions.CategoryException;
import com.pj.springsecurity.exceptions.exceptions.GenericException;
import com.pj.springsecurity.model.order.Category;
import com.pj.springsecurity.repo.CategoryRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/category")
public class CategoryController
{
    private final CategoryRepository categoryRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public CategoryController(CategoryRepository categoryRepository, ModelMapper modelMapper)
    {
        this.categoryRepository = categoryRepository;
        this.modelMapper=modelMapper;
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
            throw new GenericException("Category with id:"+id+" not Found","",HttpStatus.NOT_FOUND,
                    LocalDateTime.now(),null,"/api/v1/category/"+id);
        }
        return new ResponseEntity<>(category.get(), new HttpHeaders(), HttpStatus.OK);
    }

    @PostMapping(value = "/create")
    public Category createNewCategory(@RequestBody CategoryDTO categoryDTO)
    {
        Category category=modelMapper.map(categoryDTO,Category.class);
        return categoryRepository.saveAndFlush(category);
    }

    @PutMapping(value = "/update")
    public Category updateCategory(@RequestBody CategoryDTO categoryDTO)
    {
        Category category=modelMapper.map(categoryDTO,Category.class);
        return categoryRepository.saveAndFlush(category);
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
