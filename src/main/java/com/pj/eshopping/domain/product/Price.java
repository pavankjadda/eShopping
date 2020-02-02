package com.pj.eshopping.domain.product;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pj.eshopping.audit.AbstractAuditingEntity;
import com.pj.eshopping.domain.order.Currency;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.CascadeType;
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
@Table(name = "price")
@Cache(region = "priceCache", usage = CacheConcurrencyStrategy.READ_WRITE)
@Data
public class Price extends AbstractAuditingEntity
{
	private static final long serialVersionUID = -7104464402987718881L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@OneToOne
	@JoinColumn(name = "currency_id")
	private Currency currency;

	@Column(name = "amount", nullable = false)
	private Double amount;

	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "price")
	@JsonIgnore
	private Product product;

	public Price()
	{
	}

	public Price(Currency currency, Double amount)
	{
		this.currency = currency;
		this.amount = amount;
	}
}
