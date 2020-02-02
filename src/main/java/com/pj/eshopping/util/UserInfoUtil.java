package com.pj.eshopping.util;

import com.pj.eshopping.domain.user.UserProfile;
import com.pj.eshopping.repo.UserRepository;
import com.pj.eshopping.security.MyUserDetails;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Objects;

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
		MyUserDetails myUserDetails = (MyUserDetails) authentication.getPrincipal();
		return userRepository.findByUsername(myUserDetails.getUsername()).getUserProfile();
	}

	public boolean isValidUpdate(UserProfile newUserProfile)
	{
		return Objects.equals(getCurrentUserProfile().getId(), newUserProfile.getId());
	}
}
