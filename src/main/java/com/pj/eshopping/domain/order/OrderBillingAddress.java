package com.pj.eshopping.domain.order;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pj.eshopping.audit.AbstractAuditingEntity;
import com.pj.eshopping.domain.user.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.io.Serial;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "order_billing_address")
public class OrderBillingAddress extends AbstractAuditingEntity {
    @Serial
    private static final long serialVersionUID = -670201478701113253L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "street_name")
    private String streetName;

    @Column(name = "apartment")
    private String apartment;

    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city;

    @ManyToOne
    @JoinColumn(name = "state_id")
    private State state;

    @ManyToOne
    @JoinColumn(name = "country_id")
    private Country country;

    @ManyToOne
    @JoinColumn(name = "region_id")
    private Region region;

    @Column(name = "zip_code")
    private String zipCode;

    @ManyToOne
    @JoinColumn(name = "address_type_id", referencedColumnName = "id")
    private AddressType addressType;


    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    @JsonIgnore
    private Order order;
}
