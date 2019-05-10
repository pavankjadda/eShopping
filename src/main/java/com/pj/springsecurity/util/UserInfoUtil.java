package com.pj.springsecurity.util;

import com.pj.springsecurity.model.user.UserProfile;
import com.pj.springsecurity.repo.UserRepository;
import com.pj.springsecurity.security.MyUserDetails;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class UserInfoUtil
{
    private final UserRepository userRepository;

    public UserInfoUtil(UserRepository userRepository)
    {
        this.userRepository = userRepository;
    }

    public UserProfile getCurrentUserProfile()
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        MyUserDetails myUserDetails= (MyUserDetails) authentication.getPrincipal();
        return userRepository.findByUsername(myUserDetails.getUsername()).getUserProfile();
    }
}
