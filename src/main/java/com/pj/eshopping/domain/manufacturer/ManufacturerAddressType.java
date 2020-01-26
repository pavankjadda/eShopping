package com.pj.eshopping.domain.manufacturer;

import com.pj.eshopping.audit.AbstractAuditingEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "manufacturer_address_type")
public class ManufacturerAddressType extends AbstractAuditingEntity
{
	private static final long serialVersionUID = 7524711809270562825L;


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "type", nullable = false)
	private String type;
}
