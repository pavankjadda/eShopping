package com.pj.eshopping.domain.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "city")
@Cache(region = "cityCache", usage = CacheConcurrencyStrategy.READ_WRITE)
@Data
public class City extends AbstractAuditingEntity
{
	private static final long serialVersionUID = -8825045541258851493L;

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "name")
	//@Length(max = 100,min = 2)
	private String name;


	@ManyToOne
	@JoinColumn(name = "state_id")
	@JsonIgnoreProperties(value = {"country"})
	private State state;

	public City()
	{
	}

	public City(String name, State state)
	{
		this.name = name;
		this.state = state;
	}
}
