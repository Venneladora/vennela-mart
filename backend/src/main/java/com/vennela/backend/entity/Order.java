package com.vennela.backend.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import java.time.LocalDateTime;
@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime orderDate = LocalDateTime.now();
    private String customerName;
    private String email;
    private Double totalAmount;
    private String status = "Placed";
    public Order() {
    }

    public Order(Long id, String customerName, String email, Double totalAmount) {
        this.id = id;
        this.customerName = customerName;
        this.email = email;
        this.totalAmount = totalAmount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }
    public LocalDateTime getOrderDate() {
    return orderDate;
}

public void setOrderDate(LocalDateTime orderDate) {
    this.orderDate = orderDate;
}
public String getStatus() {
    return status;
}

public void setStatus(String status) {
    this.status = status;
}
}