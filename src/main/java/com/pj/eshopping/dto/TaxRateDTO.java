package com.pj.eshopping.dto;

import com.pj.eshopping.domain.user.State;
import lombok.Data;

import java.io.Serializable;

@Data
public class TaxRateDTO implements Serializable
{
	private static final long serialVersionUID = -1538671252612374006L;

	private Long id;
	private State state;
	private Double rate;
}
