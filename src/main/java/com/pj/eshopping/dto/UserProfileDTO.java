package com.pj.eshopping.dto;

import com.pj.eshopping.domain.user.Address;
import com.pj.eshopping.domain.user.User;

import java.util.List;

public record UserProfileDTO(Long id, String firstName, String lastName, String email, String phone, List<Address> addresses, User user) {
}