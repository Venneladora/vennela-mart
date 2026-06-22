package com.vennela.backend.controller;

import com.vennela.backend.entity.Product;
import com.vennela.backend.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    // GET Products
    @GetMapping("/products")
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    // ADD Product
    @PostMapping("/products")
    public Product addProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }
}