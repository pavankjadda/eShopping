package com.springtesting.web.api.order;

import com.springtesting.model.order.OrderDetail;
import com.springtesting.repo.OrderDetailRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/order_detail")
public class OrderDetailController
{
    private OrderDetailRepository orderDetailRepository;

    public OrderDetailController(OrderDetailRepository orderDetailRepository)
    {
        this.orderDetailRepository = orderDetailRepository;
    }

    @PostMapping(path = "/create")
    public void createOrderDetail(@RequestBody OrderDetail orderDetail)
    {
        orderDetailRepository.saveAndFlush(orderDetail);
    }

    @GetMapping(value = "/list")
    public List<OrderDetail> getOrderDetails()
    {
        return orderDetailRepository.findAll();
    }

    @GetMapping(value = "/find/{id}")
    public Optional<OrderDetail> getOrderDetailById(@PathVariable Long id)
    {
        return orderDetailRepository.findById(id);
    }

}
