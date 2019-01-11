package com.springtesting.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "price")
@Data
public class Price extends AbstractAuditingEntity
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @OneToOne
    @JoinColumn(name = "currency_id")
    private Currency currency;

    @Column(name = "amount", nullable = false)
    private Double amount;

    @ManyToMany
    @JsonIgnore
    private List<Product> productList = new ArrayList<>();


    public Price()
    {
    }

    public Price(Currency currency, Double amount)
    {
        this.currency = currency;
        this.amount = amount;
    }
}
