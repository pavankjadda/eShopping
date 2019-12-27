package com.pj.eshopping.model.inventory;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.pj.eshopping.audit.AbstractAuditingEntity;
import com.pj.eshopping.model.product.Product;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "product_inventory")
public class ProductInventory extends AbstractAuditingEntity
{
	private static final long serialVersionUID = -909553162918092892L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "quantity")
	private Long quantity;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "product_id")
	@JsonIgnoreProperties(value = {"productInventory"})
	private Product product;
}
