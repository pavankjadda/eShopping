package com.pj.eshopping.domain.manufacturer;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pj.eshopping.audit.AbstractAuditingEntity;
import com.pj.eshopping.domain.product.Product;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Getter
@Setter
@Table(name = "manufacturer")
public class Manufacturer extends AbstractAuditingEntity implements Serializable {
    @Serial
    private static final long serialVersionUID = 2518838979579289918L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "display_name")
    private String displayName;

    @Column(name = "description", length = 10000)
    private String description;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id")
    private ManufacturerAddress manufacturerAddress;

    @Column(name = "contact_email")
    private String contactEmail;

    @Column(name = "phone")
    private String phone;

    @Column(name = "fax")
    private String fax;

    @OneToMany(mappedBy = "manufacturer")
    @JsonIgnore
    private List<Product> products = new ArrayList<>();

    @Override
    public String toString() {
        return "Manufacturer{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", displayName='" + displayName + '\'' +
                ", description='" + description + '\'' +
                ", contactEmail='" + contactEmail + '\'' +
                ", phone='" + phone + '\'' +
                ", fax='" + fax + '\'' +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, displayName, description, contactEmail, phone, fax);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Manufacturer that = (Manufacturer) o;
        return Objects.equals(id, that.id) && Objects.equals(name, that.name) && Objects.equals(displayName, that.displayName) &&
                Objects.equals(description, that.description) && Objects.equals(contactEmail, that.contactEmail) &&
                Objects.equals(phone, that.phone) && Objects.equals(fax, that.fax);
    }
}