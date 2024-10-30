package com.pj.eshopping.domain.user;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.pj.eshopping.audit.AbstractAuditingEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serial;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Getter
@Setter
@Table(name = "address")
public class Address extends AbstractAuditingEntity implements Serializable {
    @Serial
    private static final long serialVersionUID = -1540126888782313444L;

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
    @JsonManagedReference
    private City city;

    @ManyToOne
    @JoinColumn(name = "state_id")
    @JsonManagedReference
    private State state;

    @ManyToOne
    @JoinColumn(name = "country_id")
    @JsonManagedReference
    private Country country;

    @ManyToOne
    @JoinColumn(name = "region_id")
    @JsonManagedReference
    private Region region;

    @Column(name = "zip_code")
    private String zipCode;

    @ManyToOne
    @JoinColumn(name = "address_type_id", referencedColumnName = "id")
    @JsonManagedReference
    private AddressType addressType;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_profile_id")
    @JsonBackReference
    @ToString.Exclude
    private UserProfile userProfile;

    @Override
    public String toString() {
        return "Address{" +
                "id=" + id +
                ", streetName='" + streetName + '\'' +
                ", apartment='" + apartment + '\'' +
                ", zipCode='" + zipCode + '\'' +
                ", addressType=" + addressType +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, streetName, apartment, zipCode, addressType);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Address address)) return false;
        return Objects.equals(id, address.id) && Objects.equals(streetName, address.streetName) &&
                Objects.equals(apartment, address.apartment) && Objects.equals(zipCode, address.zipCode) &&
                Objects.equals(addressType, address.addressType);
    }
}