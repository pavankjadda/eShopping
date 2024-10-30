package com.pj.eshopping.domain.order;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.pj.eshopping.audit.AbstractAuditingEntity;
import com.pj.eshopping.domain.product.Product;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.proxy.HibernateProxy;

import java.io.Serial;
import java.util.Objects;

@Entity
@Getter
@Setter
@RequiredArgsConstructor
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
    @ToString.Exclude
    private Order order;

    @Override
    public String toString() {
        return "OrderProductDetail{" + "id=" + id + ", originalPrice=" + originalPrice + ", discount=" + discount + ", discountedPrice=" + discountedPrice +
                '}';
    }

    @Override
    public final int hashCode() {
        return this instanceof HibernateProxy ? ((HibernateProxy) this).getHibernateLazyInitializer().getPersistentClass().hashCode() : getClass().hashCode();
    }

    @Override
    public final boolean equals(Object o) {
        if (this == o) return true;
        if (o == null) return false;
        Class<?> oEffectiveClass =
                o instanceof HibernateProxy ? ((HibernateProxy) o).getHibernateLazyInitializer().getPersistentClass() :
                        o.getClass();
        Class<?> thisEffectiveClass = this instanceof HibernateProxy ?
                ((HibernateProxy) this).getHibernateLazyInitializer().getPersistentClass() : this.getClass();
        if (thisEffectiveClass != oEffectiveClass) return false;
        OrderProductDetail that = (OrderProductDetail) o;
        return getId() != null && Objects.equals(getId(), that.getId());
    }
}