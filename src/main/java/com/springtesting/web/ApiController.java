package com.springtesting.web;

import com.springtesting.model.Category;
import com.springtesting.model.OrderDetail;
import com.springtesting.model.OrderDetailProduct;
import com.springtesting.model.Product;
import com.springtesting.repo.CategoryRepository;
import com.springtesting.repo.OrderDetailProductRepository;
import com.springtesting.repo.OrderDetailRepository;
import com.springtesting.repo.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ApiController
{
    private final CategoryRepository categoryRepository;

    private final ProductRepository productRepository;

    private final OrderDetailRepository orderDetailRepository;

    private final OrderDetailProductRepository orderDetailProductRepository;

    public ApiController(CategoryRepository categoryRepository, ProductRepository productRepository, OrderDetailRepository orderDetailRepository, OrderDetailProductRepository orderDetailProductRepository)
    {
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
        this.orderDetailRepository = orderDetailRepository;
        this.orderDetailProductRepository = orderDetailProductRepository;
    }

    //Category Controller Methods

    @PostMapping(value = "/category/create")
    public Category createNewCategory(@RequestBody Category category)
    {
        return categoryRepository.saveAndFlush(category);
    }

    @GetMapping(value = "/categories")
    public List<Category> listCategories()
    {
        return categoryRepository.findAll();
    }

    @GetMapping(value = "/category/{id}")
    public Optional<Category> getCategory(@PathVariable Long id)
    {
        return categoryRepository.findById(id);
    }



    //Product Controller methods

    @PostMapping(value = "/product/create")
    public Product createProduct(@RequestBody Product product)
    {
        return productRepository.saveAndFlush(product);
    }


    @GetMapping(value = "/products")
    public List<Product> listProducts()
    {
        return productRepository.findAll();
    }

    @GetMapping(value = "/product/{id}")
    public Optional<Product> getProduct(@PathVariable String id)
    {
        return productRepository.findById(id);
    }


    //Order Detail Controller Methods

    @PostMapping(value = "/order/create")
    public OrderDetail createOrderDetail(@RequestBody OrderDetail orderDetail)
    {
        return orderDetailRepository.saveAndFlush(orderDetail);
    }


    @GetMapping(value = "/orders")
    public List<OrderDetail> listOrderDetails()
    {
        return orderDetailRepository.findAll();
    }

    @GetMapping(value = "/order/{id}")
    public Optional<OrderDetail> getOrderDetail(@PathVariable String id)
    {
        return orderDetailRepository.findById(id);
    }

    //Customer Order Products Controller methods


    @GetMapping(value = "/orderproducts/{orderId}")
    public List<OrderDetailProduct> getOrdersAndProducts(@PathVariable String orderId)
    {
        return orderDetailProductRepository.findByOrderDetailId(orderId);
    }

}
