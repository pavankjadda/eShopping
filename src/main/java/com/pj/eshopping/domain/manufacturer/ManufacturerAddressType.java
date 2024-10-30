package com.pj.eshopping.domain.manufacturer;

import com.pj.eshopping.audit.AbstractAuditingEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serial;
import java.util.Objects;

@Getter
@Setter
@Entity
@Table(name = "manufacturer_address_type")
public class ManufacturerAddressType extends AbstractAuditingEntity {
    @Serial
    private static final long serialVersionUID = 7524711809270562825L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "type", nullable = false)
    private String type;

    @Override
    public String toString() {
        return "ManufacturerAddressType{" +
                "id=" + id +
                ", type='" + type + '\'' +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, type);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ManufacturerAddressType that = (ManufacturerAddressType) o;
        return Objects.equals(id, that.id) && Objects.equals(type, that.type);
    }
}