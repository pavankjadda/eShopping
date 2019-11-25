package com.pj.springsecurity.dto;

import com.pj.springsecurity.model.user.AddressType;
import com.pj.springsecurity.model.user.City;
import com.pj.springsecurity.model.user.Country;
import com.pj.springsecurity.model.user.Region;
import com.pj.springsecurity.model.user.State;
import com.pj.springsecurity.model.user.UserProfile;
import lombok.Data;

@Data
public class AddressDTO
{
	private Long id;

	private String streetName;

	private String apartment;

	private City city;

	private State state;

	private Country country;

	private Region region;

	private String zipCode;

	private AddressType addressType;

	private UserProfile userProfile;
}
