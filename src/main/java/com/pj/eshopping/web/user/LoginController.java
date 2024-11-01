package com.pj.eshopping.web.user;

import com.pj.eshopping.dto.UserDto;
import com.pj.eshopping.repo.UserRepository;
import com.pj.eshopping.security.MyUserDetails;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/login")
public class LoginController {
    private final Logger logger = LoggerFactory.getLogger(LoginController.class);
    private final UserRepository userRepository;

    public LoginController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping(value = {"/login"})
    public UserDto getUserLoginDetails(HttpServletRequest request) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return copyUser(authentication, request);
    }

    @GetMapping(value = {"/", "/home"})
    public UserDto validateUserSession(HttpServletRequest request) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        // If NOT anonymous user, get user info
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            return copyUser(authentication, request);
        }
        return null;
    }

    private UserDto copyUser(Authentication authentication, HttpServletRequest request) {
        try {
            var myUserDetails = (MyUserDetails) authentication.getPrincipal();
            var user = userRepository.findByUsername(myUserDetails.getUsername());
            var token = request.getSession(true).getId();

            var userDto = new UserDto();
            userDto.setId(user.getId());
            if (user.getUserProfile() == null) {
                userDto.setFirstName("");
                userDto.setLastName("");
            }
            userDto.setUsername(user.getUsername());
            userDto.setRoles(user.getRoles());
            userDto.setToken(token);
            userDto.setUserProfile(user.getUserProfile());
            return userDto;
        } catch (Exception e) {
            logger.warn("Exception: Failed to get Authentication Object=> {}", e.getMessage());
        }
        return null;
    }
}