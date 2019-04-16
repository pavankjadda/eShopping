package com.springtesting.web.api.order;

import com.springtesting.model.order.Order;
import com.springtesting.repo.OrderRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/order")
public class OrderController
{
    private OrderRepository orderRepository;

    public OrderController(OrderRepository orderRepository)
    {
        this.orderRepository = orderRepository;
    }

    @GetMapping(value = "/list")
    public List<Order> getOrder()
    {
        return orderRepository.findAll();
    }

    @GetMapping(value = "/find/{id}")
    public Optional<Order> getOrderById(@PathVariable Long id)
    {
        return orderRepository.findById(id);
    }

    @PostMapping(path = "/create")
    public Order createOrder(@RequestBody Order order)
    {
        return orderRepository.saveAndFlush(order);
    }

    @PutMapping(path = "/update")
    public Order updateOrder(@RequestBody Order order)
    {
        return orderRepository.saveAndFlush(order);
    }
}
