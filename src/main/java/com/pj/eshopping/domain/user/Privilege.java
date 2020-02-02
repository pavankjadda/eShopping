package com.pj.eshopping.domain.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Collection;

@Entity
@Data
@Table(name = "privilege")
public class Privilege implements Serializable
{
	private static final long serialVersionUID = 3L;

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;

	@ManyToMany(mappedBy = "privileges")
	@JsonIgnore
	private Collection<Role> roles;

	public Privilege()
	{
	}

	public Privilege(String name)
	{
		this.name = name;
	}


	public Privilege(String name, Collection<Role> roles)
	{
		this.name = name;
		this.roles = roles;
	}

	@Override
	public String toString()
	{
		return "Privilege{" +
				"id=" + id +
				", name='" + name + '\'' +
				'}';
	}
}
