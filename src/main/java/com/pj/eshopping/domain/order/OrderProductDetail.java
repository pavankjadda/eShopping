package com.pj.eshopping.domain.order;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.pj.eshopping.audit.AbstractAuditingEntity;
import com.pj.eshopping.domain.product.Product;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serial;
import java.util.Objects;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "order_product_detail")
public class OrderProductDetail extends AbstractAuditingEntity {
    @Serial
    private static final long serialVersionUID = -7153423452702053909L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "original_price")
    private Double originalPrice;

    @Column(name = "discount")
    private Double discount;

    @Column(name = "discounted_price")
    private Double discountedPrice;

    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "quantity")
    private Integer quantity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    @JsonIgnoreProperties(value = {"orderProductDetails"})
    private Order order;

    @Override
    public String toString() {
        return "OrderProductDetail{" + "id=" + id + ", originalPrice=" + originalPrice + ", discount=" + discount + ", discountedPrice=" + discountedPrice +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        OrderProductDetail that = (OrderProductDetail) o;
        return id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), id);
    }
}
