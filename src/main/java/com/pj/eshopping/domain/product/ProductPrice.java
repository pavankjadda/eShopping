package com.pj.eshopping.domain.product;

import com.pj.eshopping.audit.AbstractAuditingEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serial;
import java.util.Objects;

@Getter
@Setter
@Entity
@Table(name = "product_price")
public class ProductPrice extends AbstractAuditingEntity {
    @Serial
    private static final long serialVersionUID = 2677217467401857039L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "product_id", nullable = false)
    private Long productId;

    @Column(name = "price_id", nullable = false)
    private Long priceId;

    @Override
    public String toString() {
        return "ProductPrice{" +
                "id=" + id +
                ", productId=" + productId +
                ", priceId=" + priceId +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, productId, priceId);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProductPrice that)) return false;
        return Objects.equals(id, that.id) && Objects.equals(productId, that.productId) && Objects.equals(priceId, that.priceId);
    }
}