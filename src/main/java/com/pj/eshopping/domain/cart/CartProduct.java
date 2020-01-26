package com.pj.eshopping.domain.cart;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.pj.eshopping.audit.AbstractAuditingEntity;
import com.pj.eshopping.domain.product.Product;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.Column;
import javax.persistence.Entity;
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
@Cache(region = "cartCache", usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "cart_product")
public class CartProduct extends AbstractAuditingEntity
{
	private static final long serialVersionUID = 6498067041321289048L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@OneToOne
	@JoinColumn(name = "product_id")
	private Product product;

	@Column(name = "quantity")
	private Integer quantity;

	@ManyToOne
	@JoinColumn(name = "cart_id", referencedColumnName = "id")
	@JsonIgnoreProperties(value = {"userProfile", "cartStatus", "cartProducts"})
	private Cart cart;

	@Override
	public String toString()
	{
		return "CartProduct{" +
				"id=" + id +
				", quantity=" + quantity +
				'}';
	}
}
