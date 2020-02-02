package com.pj.eshopping.dto;

import com.pj.eshopping.domain.user.AddressType;
import com.pj.eshopping.domain.user.City;
import com.pj.eshopping.domain.user.Country;
import com.pj.eshopping.domain.user.Region;
import com.pj.eshopping.domain.user.State;
import com.pj.eshopping.domain.user.UserProfile;
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
