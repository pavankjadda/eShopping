package com.pj.eshopping.domain.order;

import com.pj.eshopping.audit.AbstractAuditingEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Objects;

@Getter
@Setter
@Entity
@Table(name = "currency")
@ToString
public class Currency extends AbstractAuditingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "symbol")
    private String symbol;

    @Column(name = "iso_code")
    private String isoCode;

    public Currency() {
    }

    public Currency(String name, String symbol, String isoCode) {
        this.name = name;
        this.symbol = symbol;
        this.isoCode = isoCode;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, symbol, isoCode);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Currency currency = (Currency) o;
        return Objects.equals(id, currency.id) && Objects.equals(name, currency.name) && Objects.equals(symbol, currency.symbol) &&
                Objects.equals(isoCode, currency.isoCode);
    }
}