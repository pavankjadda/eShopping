package com.springtesting.web;

import com.springtesting.model.User;
import com.springtesting.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController
{
    private final UserRepository userRepository;


    @Autowired
    public UserController(UserRepository userRepository)
    {
        this.userRepository = userRepository;
    }


    //Users Controller Methods

    @PostMapping(value = "/users/create")
    public User createNewUser(@RequestBody User user)
    {
        return userRepository.saveAndFlush(user);
    }

    @GetMapping(value = "/users/list")
    public List<User> findAll()
    {
        return userRepository.findAll();
    }

    @GetMapping(value = "/user/{id}")
    public Optional<User> findById(@PathVariable Long id)
    {
        return userRepository.findById(id);
    }


}
