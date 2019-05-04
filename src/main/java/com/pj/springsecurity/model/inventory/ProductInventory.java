package com.pj.springsecurity.model.inventory;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.pj.springsecurity.model.AbstractAuditingEntity;
import com.pj.springsecurity.model.product.Product;
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
    @JsonIgnoreProperties(value = {"category","manufacturer","price","photoList"})
    private Product product;

}
