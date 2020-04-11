package com.pj.eshopping.domain.user;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Collection;

@Entity
@Data
@Table(name = "role")
public class Role implements Serializable
{

	private static final long serialVersionUID = 6183305164933054119L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;


	@Column(name = "name", nullable = false)
	private String name;

	@ManyToMany(mappedBy = "roles")
	@JsonBackReference
	private Collection<User> users;

	@ManyToMany
	@JoinTable(
			name = "role_privilege",
			joinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"),
			inverseJoinColumns = @JoinColumn(name = "privilege_id", referencedColumnName = "id")
	)
	@JsonManagedReference
	private Collection<Privilege> privileges;


	public Role()
	{
	}

	public Role(String name)
	{
		this.name = name;
	}

	public Role(String name, Collection<User> users, Collection<Privilege> privileges)
	{
		this.name = name;
		this.users = users;
		this.privileges = privileges;
	}

	@Override
	public String toString()
	{
		return "Role{" +
				"id=" + id +
				", name='" + name + '\'' +
				'}';
	}
}
