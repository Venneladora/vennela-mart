package com.vennela.backend.repository;

import com.vennela.backend.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository
        extends JpaRepository<User, Long> {

    User findByEmail(String email);
    long count();
}