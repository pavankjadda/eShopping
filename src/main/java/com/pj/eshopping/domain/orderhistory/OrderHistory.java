package com.pj.eshopping.domain.orderhistory;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "order_history")
@Data
public class OrderHistory implements Serializable
{
	private static final long serialVersionUID = -6699432774798518217L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "order_id")
	private String orderId;

	@OneToOne
	@JoinColumn(name = "order_history_address_id")
	private OrderHistoryAddress orderHistoryAddress;

	@OneToOne
	@JoinColumn(name = "order_history_user_profile")
	private OrderHistoryUserProfile orderHistoryUserProfile;

	@OneToMany
	@JoinColumn(name = "order_history_id", referencedColumnName = "id")
	private List<OrderHistoryProduct> products = new ArrayList<>();

}
