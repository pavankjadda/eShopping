package com.pj.eshopping.domain.inventory;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.pj.eshopping.audit.AbstractAuditingEntity;
import com.pj.eshopping.domain.product.Product;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serial;
import java.util.Objects;

@Entity
@Data
@Table(name = "product_inventory")
public class ProductInventory extends AbstractAuditingEntity {
    @Serial
    private static final long serialVersionUID = -909553162918092892L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "quantity")
    private Long quantity;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    @JsonIgnoreProperties(value = {"productInventory"})
    private Product product;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        ProductInventory that = (ProductInventory) o;
        return id.equals(that.id) && Objects.equals(quantity, that.quantity);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), id, quantity);
    }

    @Override
    public String toString() {
        return "ProductInventory{" + "id=" + id + '}';
    }
}
