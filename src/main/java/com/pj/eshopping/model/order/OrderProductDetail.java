package com.pj.eshopping.model.order;

import com.pj.eshopping.audit.AbstractAuditingEntity;
import com.pj.eshopping.model.product.Product;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "order_product_detail")
public class OrderProductDetail extends AbstractAuditingEntity
{
	private static final long serialVersionUID = -7153423452702053909L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "original_price")
	private Double originalPrice;

	@Column(name = "discount")
	private Double discount;

	@Column(name = "discounted_price")
	private Double discountedPrice;

	@OneToOne
	@JoinColumn(name = "product_id")
	private Product product;

	@Column(name = "quantity")
	private Integer quantity;
}
