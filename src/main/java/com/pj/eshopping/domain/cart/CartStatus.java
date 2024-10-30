package com.pj.eshopping.domain.cart;

import com.pj.eshopping.audit.AbstractAuditingEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.io.Serial;
import java.util.Objects;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Table(name = "cart_status")
public class CartStatus extends AbstractAuditingEntity {
    @Serial
    private static final long serialVersionUID = -4128436827005113690L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "status")
    private String status;

    @Override
    public int hashCode() {
        return Objects.hash(id, status);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CartStatus that = (CartStatus) o;
        return Objects.equals(id, that.id) && Objects.equals(status, that.status);
    }
}