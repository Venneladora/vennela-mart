package com.vennela.backend.repository;

import com.vennela.backend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByEmail(String email);
     @Query("SELECT SUM(o.totalAmount) FROM Order o")
Double getTotalRevenue();
}