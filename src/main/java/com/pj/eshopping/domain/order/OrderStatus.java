package com.pj.eshopping.domain.order;

import com.pj.eshopping.audit.AbstractAuditingEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@Table(name = "order_status")
public class OrderStatus extends AbstractAuditingEntity
{
	private static final long serialVersionUID = 3679844999486153457L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "status")
	private String status;

}
