package com.vennela.backend.controller;

import java.time.LocalDateTime;
import java.util.List;
import com.vennela.backend.entity.Order;
import com.vennela.backend.repository.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("/orders")
    public Order placeOrder(@RequestBody Order order) {
         order.setStatus("Placed");
         order.setOrderDate(LocalDateTime.now());
        return orderRepository.save(order);
    }

    @GetMapping("/orders")
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @GetMapping("/orders/{email}")
    public List<Order> getOrdersByEmail(
            @PathVariable String email
    ) {
        return orderRepository.findByEmail(email);
    }
   @PutMapping("/orders/{id}/{status}")
public Order updateStatus(
        @PathVariable Long id,
        @PathVariable String status
) {

    Order order =
            orderRepository.findById(id).get();

    order.setStatus(status);

    return orderRepository.save(order);
} 
}