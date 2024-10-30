package com.pj.eshopping.domain.tax;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.pj.eshopping.audit.AbstractAuditingEntity;
import com.pj.eshopping.domain.user.State;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serial;
import java.util.Objects;

@Getter
@Setter
@Entity
@Table(name = "tax_rate")
public class TaxRate extends AbstractAuditingEntity {
    @Serial
    private static final long serialVersionUID = 268817337183217083L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true, optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "state_id", referencedColumnName = "id")
    @JsonIgnoreProperties(value = {"country"})
    private State state;

    @Column(name = "rate")
    private Double rate;

    @Override
    public String toString() {
        return "TaxRate{" +
                "id=" + id +
                ", rate=" + rate +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, state, rate);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TaxRate taxRate = (TaxRate) o;
        return Objects.equals(id, taxRate.id) && Objects.equals(state, taxRate.state) && Objects.equals(rate, taxRate.rate);
    }
}