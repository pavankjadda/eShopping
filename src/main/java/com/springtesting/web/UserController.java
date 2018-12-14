package com.springtesting.web;

import com.springtesting.model.User;
import com.springtesting.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

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
    public Page<User> findAll(@RequestParam(required = false) Integer pageNumber, @RequestParam(required = false) Integer limit)
    {
        if (pageNumber == null)
            pageNumber = 0;
        if(limit == null)
            limit=10;
        return userRepository.findAll(PageRequest.of(pageNumber,limit,Sort.by(Sort.Direction.ASC,"id")));
    }

    @GetMapping(value = "/user/{id}")
    public Optional<User> findById(@PathVariable Long id)
    {
        return userRepository.findById(id);
    }

    @GetMapping(value = "/user/{username}")
    public User findByUsername(@PathVariable String username)
    {
        return userRepository.findByUsername(username);
    }
}
