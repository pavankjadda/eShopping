package com.pj.springsecurity.model.product;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pj.springsecurity.model.AbstractAuditingEntity;
import com.pj.springsecurity.model.order.Currency;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "price")
@Data
public class Price extends AbstractAuditingEntity
{
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

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL,mappedBy = "price")
    @JsonIgnore
    private Product product;

    public Price()
    {
    }

    public Price(Currency currency, Double amount)
    {
        this.currency = currency;
        this.amount = amount;
    }
}
