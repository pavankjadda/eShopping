package com.pj.springsecurity.web.api.user;

import com.pj.springsecurity.model.user.UserProfile;
import com.pj.springsecurity.repo.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/user_profile")
public class UserProfileController
{
    private UserProfileRepository userProfileRepository;

    @Autowired
    public UserProfileController(UserProfileRepository userProfileRepository)
    {
        this.userProfileRepository = userProfileRepository;
    }


    @GetMapping(value = "/list")
    public List<UserProfile> findAll()
    {
        return userProfileRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    public Optional<UserProfile> findById(@PathVariable Long id)
    {
        return userProfileRepository.findById(id);
    }

    @GetMapping(value = "/user/{id}")
    public Optional<UserProfile> findByUserId(@PathVariable Long id)
    {
        return userProfileRepository.findAllByUserId(id);
    }

    @PostMapping(value = "/create")
    public UserProfile createNewUserProfile(@RequestBody UserProfile userProfile)
    {
        return userProfileRepository.saveAndFlush(userProfile);
    }

    @PutMapping(value = "/update")
    public UserProfile updateUserProfile(@RequestBody UserProfile userProfile)
    {
        return userProfileRepository.saveAndFlush(userProfile);
    }
}
