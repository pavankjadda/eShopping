package com.pj.eshopping.domain.tax;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.pj.eshopping.audit.AbstractAuditingEntity;
import com.pj.eshopping.domain.user.State;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serial;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
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
}
