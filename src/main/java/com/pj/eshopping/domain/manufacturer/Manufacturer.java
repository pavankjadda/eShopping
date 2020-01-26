package com.pj.eshopping.domain.manufacturer;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pj.eshopping.audit.AbstractAuditingEntity;
import com.pj.eshopping.domain.product.Product;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Cache(region = "manufacturerCache", usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "manufacturer")
public class Manufacturer extends AbstractAuditingEntity implements Serializable
{
	private static final long serialVersionUID = 2518838979579289918L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "name", nullable = false)
	private String name;

	@Column(name = "display_name")
	private String displayName;

	@Column(name = "description", length = 10000)
	private String description;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "address_id")
	private ManufacturerAddress manufacturerAddress;

	@Column(name = "contact_email")
	private String contactEmail;

	@Column(name = "phone")
	private String phone;

	@Column(name = "fax")
	private String fax;

	@OneToMany(mappedBy = "manufacturer")
	@JsonIgnore
	private List<Product> products = new ArrayList<>();

}
