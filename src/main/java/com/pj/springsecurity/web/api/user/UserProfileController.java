package com.pj.springsecurity.web.api.user;

import com.pj.springsecurity.dto.UserProfileDTO;
import com.pj.springsecurity.model.user.UserProfile;
import com.pj.springsecurity.repo.UserProfileRepository;
import com.pj.springsecurity.util.UserInfoUtil;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/user_profile")
public class UserProfileController
{
    private UserProfileRepository userProfileRepository;
    private ModelMapper modelMapper;
    private UserInfoUtil userInfoUtil;

    @Autowired
    public UserProfileController(UserProfileRepository userProfileRepository, UserInfoUtil userInfoUtil, ModelMapper modelMapper)
    {
        this.userProfileRepository = userProfileRepository;
        this.userInfoUtil=userInfoUtil;
        this.modelMapper=modelMapper;
    }


    @GetMapping(value = "/list")
    public List<UserProfile> findAll()
    {
        return userProfileRepository.findAll();
    }

    @GetMapping(value = "/my_profile")
    public UserProfile getMyProfile()
    {
        return userInfoUtil.getCurrentUserProfile();
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
    public UserProfile createNewUserProfile(@RequestBody UserProfileDTO userProfileDTO)
    {
        UserProfile userProfile=modelMapper.map(userProfileDTO,UserProfile.class);
        return userProfileRepository.saveAndFlush(userProfile);
    }

    @PostMapping(value = "/update")
    public UserProfile updateUserProfile(@RequestBody UserProfileDTO userProfileDTO)
    {
        UserProfile newUserProfile=modelMapper.map(userProfileDTO,UserProfile.class);
        if(userInfoUtil.isValidUpdate(newUserProfile))
        {
            newUserProfile.setUser(userInfoUtil.getCurrentUserProfile().getUser());
            newUserProfile.getAddresses().forEach(address -> address.setUserProfile(newUserProfile));
            return userProfileRepository.saveAndFlush(newUserProfile);
        }
        return null;
    }
}
