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

    @PostMapping(path = "/create")
    public void createOrder(@RequestBody Order order)
    {
        orderRepository.saveAndFlush(order);
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

}
