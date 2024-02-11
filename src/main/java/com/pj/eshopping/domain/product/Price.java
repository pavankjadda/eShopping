package com.pj.eshopping.domain.product;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pj.eshopping.audit.AbstractAuditingEntity;
import com.pj.eshopping.domain.order.Currency;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serial;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "price")
@Data
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
}
