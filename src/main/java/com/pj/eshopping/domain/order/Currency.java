package com.pj.eshopping.domain.order;


import com.pj.eshopping.audit.AbstractAuditingEntity;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "currency")
@Data
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
}
