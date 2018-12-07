package com.springtesting.web;

import com.springtesting.model.OrderDetail;
import com.springtesting.repo.OrderDetailRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/orders")
public class OrderDetailController
{
    private OrderDetailRepository OrderDetailRepository;

    public OrderDetailController(OrderDetailRepository OrderDetailRepository)
    {
        this.OrderDetailRepository=OrderDetailRepository;
    }

    @PostMapping(path = "/create")
    public void createOrderDetail(@RequestBody OrderDetail OrderDetail)
    {
        OrderDetailRepository.saveAndFlush(OrderDetail);
    }

    @GetMapping(value = "/list")
    public List<OrderDetail> getOrderDetailes()
    {
        return OrderDetailRepository.findAll();
    }

    @GetMapping(value = "/find/{id}")
    public Optional<OrderDetail> getOrderDetailById(@PathVariable String id)
    {
        return OrderDetailRepository.findById(id);
    }

}
