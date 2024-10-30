package com.pj.eshopping.domain.cart;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.pj.eshopping.audit.AbstractAuditingEntity;
import com.pj.eshopping.domain.product.Product;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serial;
import java.util.Objects;

@Getter
@Setter
@Entity
@Table(name = "cart_product")
public class CartProduct extends AbstractAuditingEntity {
    @Serial
    private static final long serialVersionUID = 6498067041321289048L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "quantity")
    private Integer quantity;

    @ManyToOne
    @JoinColumn(name = "cart_id", referencedColumnName = "id")
    @JsonIgnoreProperties(value = {"userProfile", "cartStatus", "cartProducts"})
    private Cart cart;

    @Override
    public String toString() {
        return "CartProduct{" + "id=" + id + ", quantity=" + quantity + '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, quantity);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CartProduct that)) return false;
        return Objects.equals(id, that.id) && Objects.equals(quantity, that.quantity);
    }
}