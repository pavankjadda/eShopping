package com.pj.eshopping.domain.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.pj.eshopping.audit.AbstractAuditingEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "user_profile")
public class UserProfile extends AbstractAuditingEntity
{

	private static final long serialVersionUID = -5481697743705747733L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;


	@NotNull(message = "First name must not be null")
	@NotEmpty
	@Column(name = "first_name", nullable = false)
	private String firstName;


	@NotNull(message = "Last name must not be null")
	@NotEmpty
	@Column(name = "last_name", nullable = false)
	private String lastName;


	@NotNull(message = "Email must not be null")
	@NotEmpty
	@Column(name = "email", nullable = false)
	private String email;


	@Column(name = "phone")
	private String phone;


	@OneToMany(cascade = CascadeType.ALL, mappedBy = "userProfile")
	private List<Address> addresses = new ArrayList<>();

	/*  @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler","userProfile","roles"}) can be replaced with FetchType.EAGER  */
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	@JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler", "userProfile", "roles", "password"})
	private User user;

	@Override
	public String toString()
	{
		return "UserProfile{" +
				"id=" + id +
				", firstName='" + firstName + '\'' +
				", lastName='" + lastName + '\'' +
				", email='" + email + '\'' +
				", phone='" + phone + '\'' +
				'}';
	}
}
