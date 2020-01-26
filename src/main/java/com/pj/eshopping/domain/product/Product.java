package com.pj.eshopping.domain.product;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.pj.eshopping.audit.AbstractAuditingEntity;
import com.pj.eshopping.domain.category.Category;
import com.pj.eshopping.domain.inventory.ProductInventory;
import com.pj.eshopping.domain.manufacturer.Manufacturer;
import lombok.Data;
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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


@Entity
@Data
@Cache(region = "productCache", usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "product")
public class Product extends AbstractAuditingEntity implements Serializable
{
	private static final long serialVersionUID = 673660797966130931L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "name", nullable = false)
	private String name;

	@Column(name = "description", length = 10000)
	private String description;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "category_id", referencedColumnName = "id")
	private Category category;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "manufacturer_id", referencedColumnName = "id")
	private Manufacturer manufacturer;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY,mappedBy = "product")
	@JsonIgnoreProperties(value = {"product"})
	private ProductInventory productInventory;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "price_id")
	private Price price;

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "product")
	@JsonIgnoreProperties(value = {"product"})
	private List<Photo> photoList = new ArrayList<>();

	@Override
	public String toString()
	{
		return "Product{" +
				"id=" + id +
				", name='" + name + '\'' +
				", description='" + description + '\'' +
				", category=" + category +
				'}';
	}

	@Override
	public boolean equals(Object o)
	{
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		if (!super.equals(o))
			return false;
		Product product = (Product) o;
		return id.equals(product.id) &&
				Objects.equals(name, product.name);
	}

	@Override
	public int hashCode()
	{
		return Objects.hash(super.hashCode(), id, name);
	}
}
