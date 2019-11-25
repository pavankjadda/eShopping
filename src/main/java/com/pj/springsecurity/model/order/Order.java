package com.pj.springsecurity.model.order;

import com.pj.springsecurity.audit.AbstractAuditingEntity;
import com.pj.springsecurity.model.user.UserProfile;
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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "`order`")
public class Order extends AbstractAuditingEntity implements Serializable
{
	private static final long serialVersionUID = -6699422774799518237L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "tax")
	private Double tax;

	@Column(name = "shipping_charge")
	private Double shippingCharge;

	@Column(name = "total_cost")
	private Double totalCost;

	@ManyToOne
	@JoinColumn(name = "order_status")
	private OrderStatus orderStatus;

	@ManyToOne
	@JoinColumn(name = "purchased_By")
	private UserProfile purchasedBy;

	@OneToOne(fetch = FetchType.LAZY, mappedBy = "order", cascade = CascadeType.ALL, optional = false)
	@JoinColumn(name = "order_shipping_address")
	private OrderShippingAddress orderShippingAddress;

	@OneToOne(fetch = FetchType.LAZY, mappedBy = "order", cascade = CascadeType.ALL, optional = false)
	@JoinColumn(name = "order_billing_address")
	private OrderBillingAddress orderBillingAddress;

	@Column(name = "order_created_date_time")
	private LocalDateTime orderCreatedDateTime;

	@OneToMany
	@JoinColumn(name = "order_id")
	private List<OrderProductDetail> orderProductDetails = new ArrayList<>();

	@Override
	public String toString()
	{
		return "Order{" +
				"id=" + id +
				", tax=" + tax +
				", shippingCharge=" + shippingCharge +
				", totalCost=" + totalCost +
				'}';
	}
}
