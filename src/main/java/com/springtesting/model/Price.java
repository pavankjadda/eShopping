package com.springtesting.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "price")
@Data
public class Price
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "currency_id")
    private Currency currency;

    @Column(name = "amount", nullable = false)
    private Double amount;

    @ManyToMany
    @JsonBackReference
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
