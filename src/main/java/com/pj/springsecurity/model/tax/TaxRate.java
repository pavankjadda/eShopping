package com.pj.springsecurity.model.tax;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.pj.springsecurity.audit.AbstractAuditingEntity;
import com.pj.springsecurity.model.user.State;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "tax_rate")
public class TaxRate extends AbstractAuditingEntity
{
    private static final long serialVersionUID = 268817337183217083L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @OneToOne(cascade = CascadeType.ALL,orphanRemoval = true,optional = false,fetch = FetchType.LAZY)
    @JoinColumn(name = "state_id",referencedColumnName = "id")
    @JsonIgnoreProperties(value = {"country"})
    private State state;

    @Column(name = "rate")
    private Double rate;
}
