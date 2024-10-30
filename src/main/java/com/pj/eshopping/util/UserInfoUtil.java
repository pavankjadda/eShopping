package com.pj.eshopping.util;

import com.pj.eshopping.domain.user.UserProfile;
import com.pj.eshopping.repo.UserRepository;
import com.pj.eshopping.security.MyUserDetails;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Objects;

@Component
public class UserInfoUtil {
    private final UserRepository repository;

    public UserInfoUtil(UserRepository repository) {
        this.repository = repository;
    }

    public UserProfile getCurrentUserProfile() {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        var myUserDetails = (MyUserDetails) authentication.getPrincipal();
        return repository.findByUsername(myUserDetails.getUsername()).getUserProfile();
    }

    public boolean isValidUpdate(UserProfile newUserProfile) {
        return Objects.equals(getCurrentUserProfile().getId(), newUserProfile.getId());
    }
}