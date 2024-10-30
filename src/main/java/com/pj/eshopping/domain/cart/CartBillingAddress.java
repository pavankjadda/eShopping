package com.pj.eshopping.domain.cart;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.pj.eshopping.audit.AbstractAuditingEntity;
import com.pj.eshopping.domain.user.*;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serial;
import java.util.Objects;

@Entity
@Getter
@Setter
@Table(name = "cart_billing_address")
public class CartBillingAddress extends AbstractAuditingEntity {
    @Serial
    private static final long serialVersionUID = 5015149636428611585L;

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
    @JoinColumn(name = "cart_id")
    @JsonBackReference
    @ToString.Exclude
    private Cart cart;

    @Override
    public String toString() {
        return "CartBillingAddress{" +
                "id=" + id +
                ", streetName='" + streetName + '\'' +
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
        if (!(o instanceof CartBillingAddress that)) return false;
        return Objects.equals(id, that.id) && Objects.equals(streetName, that.streetName) &&
                Objects.equals(apartment, that.apartment) && Objects.equals(zipCode, that.zipCode);
    }
}