package com.vennela.backend.controller;

import com.vennela.backend.entity.User;
import com.vennela.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin(origins = "http://localhost:5173")

public class UserController {

    @Autowired
    private UserRepository userRepository;

    // REGISTER
    @PostMapping("/register")

    public User registerUser(
            @RequestBody User user
    ) {

        return userRepository.save(user);
    }

    // LOGIN
    @PostMapping("/login")

    public String loginUser(
            @RequestBody User user
    ) {

        User existingUser =
                userRepository.findByEmail(user.getEmail());

        if (
                existingUser != null &&
                existingUser.getPassword().equals(user.getPassword())
        ) {

            return "Login Success";
        }

        return "Invalid Email or Password";
    }
}