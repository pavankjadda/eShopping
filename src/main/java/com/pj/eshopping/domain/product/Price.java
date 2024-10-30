package com.pj.eshopping.domain.product;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pj.eshopping.audit.AbstractAuditingEntity;
import com.pj.eshopping.domain.order.Currency;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serial;
import java.util.Objects;

@Entity
@Table(name = "price")
@Getter
@Setter
public class Price extends AbstractAuditingEntity {
    @Serial
    private static final long serialVersionUID = -7104464402987718881L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @OneToOne
    @JoinColumn(name = "currency_id")
    private Currency currency;

    @Column(name = "amount", nullable = false)
    private Double amount;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "price")
    @JsonIgnore
    private Product product;

    public Price() {
    }

    public Price(Currency currency, Double amount) {
        this.currency = currency;
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "Price{" +
                "amount=" + amount +
                ", currency=" + currency +
                ", id=" + id +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, currency, amount);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Price price)) return false;
        return Objects.equals(id, price.id) && Objects.equals(currency, price.currency) && Objects.equals(amount, price.amount);
    }
}