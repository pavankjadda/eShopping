package com.pj.eshopping.domain.manufacturer;

import com.pj.eshopping.audit.AbstractAuditingEntity;
import com.pj.eshopping.domain.user.City;
import com.pj.eshopping.domain.user.Country;
import com.pj.eshopping.domain.user.Region;
import com.pj.eshopping.domain.user.State;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.io.Serial;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "manufacturer_address")
public class ManufacturerAddress extends AbstractAuditingEntity {
    @Serial
    private static final long serialVersionUID = 8733009552741603083L;

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
    @JoinColumn(name = "manufacturer_address_type_id")
    private ManufacturerAddressType manufacturerAddressType;
}
