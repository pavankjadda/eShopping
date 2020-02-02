package com.pj.eshopping.web.user;

import com.pj.eshopping.domain.user.UserProfile;
import com.pj.eshopping.dto.UserProfileDTO;
import com.pj.eshopping.exceptions.exceptions.GenericException;
import com.pj.eshopping.repo.UserProfileRepository;
import com.pj.eshopping.util.UserInfoUtil;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
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
		this.userInfoUtil = userInfoUtil;
		this.modelMapper = modelMapper;
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
		UserProfile userProfile = modelMapper.map(userProfileDTO, UserProfile.class);
		return userProfileRepository.saveAndFlush(userProfile);
	}

	@PostMapping(value = "/update")
	public UserProfile updateUserProfile(@RequestBody UserProfileDTO userProfileDTO, HttpServletRequest request)
	{
		UserProfile newUserProfile = modelMapper.map(userProfileDTO, UserProfile.class);
		if (userInfoUtil.isValidUpdate(newUserProfile))
		{
			newUserProfile.setUser(userInfoUtil.getCurrentUserProfile().getUser());
			if (newUserProfile.getAddresses() != null && !newUserProfile.getAddresses().isEmpty())
			{
				newUserProfile.getAddresses().forEach(address -> address.setUserProfile(newUserProfile));
			}
			return userProfileRepository.saveAndFlush(newUserProfile);
		}
		else
			throw new GenericException("Failed to Update UserProfile, You do not have access to update profile with id: " + userProfileDTO.getId()
					, null, HttpStatus.NOT_FOUND, LocalDateTime.now(), null, request.getRequestURI());
	}
}
