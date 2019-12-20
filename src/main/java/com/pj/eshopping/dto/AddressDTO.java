package com.pj.eshopping.dto;

import com.pj.eshopping.model.user.AddressType;
import com.pj.eshopping.model.user.City;
import com.pj.eshopping.model.user.Country;
import com.pj.eshopping.model.user.Region;
import com.pj.eshopping.model.user.State;
import com.pj.eshopping.model.user.UserProfile;
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
