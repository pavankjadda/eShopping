package com.pj.eshopping.dto;

import com.pj.eshopping.domain.user.State;

public record TaxRateDTO(Long id, State state, Double rate) {
}