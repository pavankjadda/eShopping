package com.pj.eshopping.domain.category;

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
import javax.persistence.NamedStoredProcedureQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@Cache(region = "categoryCache", usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "category")
@NamedStoredProcedureQuery(name = "getAllCategoriesThroughStoredProcedureCustom", procedureName = "get_all_categories", resultClasses = Category.class)
public class Category extends AbstractAuditingEntity implements Serializable
{
	private static final long serialVersionUID = -6699422774799518217L;

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotEmpty
	@Column(name = "name", nullable = false)
	private String name;

	@Column(name = "description")
	private String description;
}
