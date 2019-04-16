package com.springtesting.model.cart;

import com.springtesting.model.AbstractAuditingEntity;
import com.springtesting.model.product.Product;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "cart")
public class Cart  extends AbstractAuditingEntity
{
    private static final long serialVersionUID = 6294902210705780249L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cart_status")
    private CartStatus cartStatus;

    @OneToMany
    @JoinColumn(name = "product_id")
    private Product product;


}
