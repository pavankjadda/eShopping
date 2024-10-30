package com.pj.eshopping.domain.user;

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
@ToString
@Table(name = "address_type")
public class AddressType extends AbstractAuditingEntity implements Serializable {
    @Serial
    private static final long serialVersionUID = 4381043207138882281L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "type", nullable = false)
    private String type;

    public AddressType() {
        // Default Constructor
    }

    public AddressType(String type) {
        this.type = type;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, type);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AddressType that = (AddressType) o;
        return Objects.equals(id, that.id) && Objects.equals(type, that.type);
    }
}