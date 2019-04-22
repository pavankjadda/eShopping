package com.pj.springsecurity.model.cart;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.pj.springsecurity.model.AbstractAuditingEntity;
import com.pj.springsecurity.model.user.UserProfile;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Cache(region = "cartCache",usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "cart")
public class Cart  extends AbstractAuditingEntity
{
    private static final long serialVersionUID = 6294902210705780249L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_profile_id")
    @JsonIgnoreProperties(value = {"addresses"})
    private UserProfile userProfile;

    @ManyToOne
    @JoinColumn(name = "cart_status")
    private CartStatus cartStatus;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL,fetch = FetchType.LAZY,orphanRemoval = true)
    private List<CartProduct> cartProducts=new ArrayList<>();

    @Override
    public String toString()
    {
        return "Cart{" +
                "id=" + id +
                ", userProfile=" + userProfile +
                ", cartStatus=" + cartStatus +
                '}';
    }

    public void addCartProduct(CartProduct cartProduct)
    {
        cartProducts.add(cartProduct);
        cartProduct.setCart(this);
    }
    public void removeCartProduct(CartProduct cartProduct)
    {
        cartProducts.remove(cartProduct);
        cartProduct.setCart(null);
    }

}
