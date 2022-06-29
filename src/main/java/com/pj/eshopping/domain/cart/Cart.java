package com.pj.eshopping.domain.cart;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.pj.eshopping.audit.AbstractAuditingEntity;
import com.pj.eshopping.domain.user.UserProfile;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.io.Serial;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "cart")
public class Cart extends AbstractAuditingEntity {
    @Serial
    private static final long serialVersionUID = 6294902210705780249L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_profile_id")
    @JsonIgnoreProperties(value = {"addresses", "user"})
    private UserProfile userProfile;

    @ManyToOne
    @JoinColumn(name = "cart_status")
    private CartStatus cartStatus;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    private List<CartProduct> cartProducts = new ArrayList<>();

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "cart", cascade = CascadeType.ALL)
    @JoinColumn(name = "cart_shipping_address")
    private CartShippingAddress cartShippingAddress;

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "cart", cascade = CascadeType.ALL)
    @JoinColumn(name = "cart_billing_address")
    @JsonManagedReference
    private CartBillingAddress cartBillingAddress;

    @Override
    public String toString() {
        return "Cart{" + "id=" + id + ", userProfile=" + userProfile + ", cartStatus=" + cartStatus + '}';
    }

}
