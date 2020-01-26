package com.pj.eshopping.domain.order;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pj.eshopping.audit.AbstractAuditingEntity;
import com.pj.eshopping.domain.user.AddressType;
import com.pj.eshopping.domain.user.City;
import com.pj.eshopping.domain.user.Country;
import com.pj.eshopping.domain.user.Region;
import com.pj.eshopping.domain.user.State;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "order_shipping_address")
public class OrderShippingAddress extends AbstractAuditingEntity
{
	private static final long serialVersionUID = 8733009552741603083L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "street_name")
	private String streetName;

	@Column(name = "apartment")
	private String apartment;

	@ManyToOne
	@JoinColumn(name = "city_id")
	private City city;

	@ManyToOne
	@JoinColumn(name = "state_id")
	private State state;

	@ManyToOne
	@JoinColumn(name = "country_id")
	private Country country;

	@ManyToOne
	@JoinColumn(name = "region_id")
	private Region region;

	@Column(name = "zip_code")
	private String zipCode;

	@ManyToOne
	@JoinColumn(name = "address_type_id", referencedColumnName = "id")
	private AddressType addressType;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "order_id")
	@JsonIgnore
	private Order order;
}
