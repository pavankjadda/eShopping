package com.springtesting.model.cart;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.springtesting.model.AbstractAuditingEntity;
import com.springtesting.model.product.Product;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "cart_product")
public class CartProduct extends AbstractAuditingEntity
{
    private static final long serialVersionUID = 6498067041321289048L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cart_id")
    @JsonIgnoreProperties(value = {"userProfile","cartStatus","cartProducts"})
    private Cart cart;

    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "quantity")
    private Integer quantity;

}
