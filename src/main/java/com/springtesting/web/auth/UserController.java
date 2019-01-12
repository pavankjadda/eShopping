package com.springtesting.web.auth;

import com.springtesting.dto.GenericResponseDto;
import com.springtesting.dto.RegisterUserDto;
import com.springtesting.model.User;
import com.springtesting.model.UserProfile;
import com.springtesting.repo.UserProfileRepository;
import com.springtesting.repo.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.HashMap;
import java.util.Optional;

@RestController
public class UserController
{
    private final UserRepository userRepository;

    private final UserProfileRepository userProfileRepository;


    private Logger logger=LoggerFactory.getLogger(UserController.class);


    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserController(UserRepository userRepository,UserProfileRepository userProfileRepository, BCryptPasswordEncoder bCryptPasswordEncoder)
    {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.userProfileRepository=userProfileRepository;
    }


    //Users Controller Methods

    @PostMapping(value = "/users/create")
    public User createNewUser(@RequestBody User user)
    {
        return userRepository.saveAndFlush(user);
    }

    @PostMapping(value = "/register")
    public ResponseEntity<GenericResponseDto> createNewUserFromObject(@RequestBody RegisterUserDto registerUserDto)
    {
        logger.info("RegisterUserDto =>"+registerUserDto.toString());
        GenericResponseDto genericResponseDto=new GenericResponseDto();
        User newUser=createUserObject(registerUserDto);
        try
        {
            newUser=userRepository.saveAndFlush(newUser);
            logger.info("User account created  with Id=>"+newUser.getId());

            UserProfile userProfile=createUserProfileObject(newUser,registerUserDto);
            userProfileRepository.saveAndFlush(userProfile);
            logger.info("User Account Profile created  with Id=> "+userProfile.getId());

            genericResponseDto.setHttpStatusCode("201");
            genericResponseDto.setHttpStatus("Success");
            HashMap<String,String> hashMap=new HashMap<>();
            hashMap.put("username",newUser.getUsername());
            genericResponseDto.setHashMap(hashMap);

            return ResponseEntity.status(201)
                    .header("RegistrationRequestStatus", "success")
                    .header("username", newUser.getUsername())
                    .body(genericResponseDto);

        }
        catch (Exception e)
        {
            e.printStackTrace();

            genericResponseDto.setHttpStatusCode("400");
            genericResponseDto.setHttpStatus("Failure");
            HashMap<String,String> hashMap=new HashMap<>();
            genericResponseDto.setHashMap(hashMap);

            return ResponseEntity.badRequest()
                    .header("RegistrationRequestStatus", "failed")
                    .body(genericResponseDto);
        }


    }



    @GetMapping(value = "/users/list")
    public Page<User> findAll(@RequestParam(required = false) Integer pageNumber, @RequestParam(required = false) Integer limit)
    {
        if (pageNumber == null)
            pageNumber = 0;
        if (limit == null)
            limit = 10;
        return userRepository.findAll(PageRequest.of(pageNumber, limit, Sort.by(Sort.Direction.ASC, "id")));
    }

    @GetMapping(value = "/user/{id}")
    public Optional<User> findById(@PathVariable Long id)
    {
        return userRepository.findById(id);
    }

    @GetMapping(value = "/user/username/{username}")
    public User findByUsername(@PathVariable String username)
    {
        return userRepository.findByUsername(username);
    }

    private UserProfile createUserProfileObject(User newUser, RegisterUserDto registerUserDto)
    {
        UserProfile userProfile=new UserProfile();
        userProfile.setUser(newUser);
        userProfile.setEmail(registerUserDto.getEmail());
        userProfile.setFirstName("Admin");
        userProfile.setLastName("Admin");
        return userProfile;
    }

    private User createUserObject(RegisterUserDto registerUserDto)
    {
        String encodedPassword=bCryptPasswordEncoder.encode(registerUserDto.getPassword());

        User user=new User();
        user.setUsername(registerUserDto.getUsername());
        user.setPassword(encodedPassword);
        user.setActive(true);
        user.setAccountNonExpired(true);
        user.setCredentialsNonExpired(true);
        user.setAccountNonLocked(true);
        user.setCreatedBy("System");
        user.setLastModifiedBy("System");
        user.setCreatedDate(Instant.now());
        user.setLastModifiedDate(Instant.now());
        return user;
    }

}
