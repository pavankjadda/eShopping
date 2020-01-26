package com.pj.eshopping.domain.product;

import com.pj.eshopping.audit.AbstractAuditingEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@Cache(region = "photoCache", usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "photo")
public class Photo extends AbstractAuditingEntity implements Serializable
{
	private static final long serialVersionUID = 3373277677411648585L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "name", nullable = false)
	private String name;

	@Column(name = "description")
	private String description;

	@Lob
	@Column(name = "data")
	private byte[] data;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "product_id")
	private Product product;
}
