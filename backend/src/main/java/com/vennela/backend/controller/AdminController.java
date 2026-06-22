package com.vennela.backend.controller;

import com.vennela.backend.repository.UserRepository;
import com.vennela.backend.repository.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/admin/stats")
    public Map<String, Object> getStats() {

        Map<String, Object> stats =
                new HashMap<>();

        stats.put(
                "users",
                userRepository.count()
        );

        stats.put(
                "orders",
                orderRepository.count()
        );

        stats.put(
                "revenue",
                orderRepository.getTotalRevenue()
        );

        return stats;
    }
}