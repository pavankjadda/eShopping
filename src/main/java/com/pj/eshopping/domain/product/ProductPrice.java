package com.pj.eshopping.domain.product;


import com.pj.eshopping.audit.AbstractAuditingEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "product_price")
@Cache(region = "productPriceCache", usage = CacheConcurrencyStrategy.READ_WRITE)
@Data
public class ProductPrice extends AbstractAuditingEntity
{
	private static final long serialVersionUID = 2677217467401857039L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "product_id", nullable = false)
	private Long productId;

	@Column(name = "price_id", nullable = false)
	private Long priceId;
}
