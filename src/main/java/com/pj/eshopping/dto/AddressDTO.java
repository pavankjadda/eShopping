package com.pj.eshopping.dto;

import com.pj.eshopping.domain.user.*;
import lombok.Data;

@Data
public class AddressDTO {
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
