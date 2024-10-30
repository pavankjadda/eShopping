package com.pj.eshopping.dto.request;

import com.pj.eshopping.domain.user.*;

public record AddressRequest(Long id, String streetName, String apartment, City city, State state, Country country, Region region, String zipCode,
                             AddressType addressType, UserProfile userProfile) {
}