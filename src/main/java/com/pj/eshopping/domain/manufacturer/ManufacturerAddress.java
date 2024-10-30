package com.pj.eshopping.domain.manufacturer;

import com.pj.eshopping.audit.AbstractAuditingEntity;
import com.pj.eshopping.domain.user.City;
import com.pj.eshopping.domain.user.Country;
import com.pj.eshopping.domain.user.Region;
import com.pj.eshopping.domain.user.State;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serial;
import java.util.Objects;

@Getter
@Setter
@Entity
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

    @Override
    public String toString() {
        return "ManufacturerAddress{" +
                "streetName='" + streetName + '\'' +
                ", id=" + id +
                ", apartment='" + apartment + '\'' +
                ", zipCode='" + zipCode + '\'' +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, streetName, apartment, zipCode);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ManufacturerAddress that = (ManufacturerAddress) o;
        return Objects.equals(id, that.id) && Objects.equals(streetName, that.streetName) &&
                Objects.equals(apartment, that.apartment) && Objects.equals(zipCode, that.zipCode);
    }
}