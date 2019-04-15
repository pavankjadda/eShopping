package com.springtesting.model.inventory;

import com.springtesting.model.AbstractAuditingEntity;
import com.springtesting.model.product.Product;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "product_inventory")
public class ProductInventory extends AbstractAuditingEntity
{
    private static final long serialVersionUID = -909553162918092892L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "quantity")
    private Long quantity;

    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;

}
