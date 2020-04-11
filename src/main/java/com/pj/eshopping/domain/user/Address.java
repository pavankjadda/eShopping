package com.pj.eshopping.domain.user;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.pj.eshopping.audit.AbstractAuditingEntity;
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
import javax.persistence.Table;
import java.io.Serializable;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "address")
public class Address extends AbstractAuditingEntity  implements Serializable
{
	private static final long serialVersionUID = -1540126888782313444L;
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
	@JsonManagedReference
	private City city;

	@ManyToOne
	@JoinColumn(name = "state_id")
	@JsonManagedReference
	private State state;

	@ManyToOne
	@JoinColumn(name = "country_id")
	@JsonManagedReference
	private Country country;

	@ManyToOne
	@JoinColumn(name = "region_id")
	@JsonManagedReference
	private Region region;

	@Column(name = "zip_code")
	private String zipCode;

	@ManyToOne
	@JoinColumn(name = "address_type_id", referencedColumnName = "id")
	@JsonManagedReference
	private AddressType addressType;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_profile_id")
	@JsonBackReference
	private UserProfile userProfile;

}
