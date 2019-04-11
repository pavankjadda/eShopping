package com.springtesting.model.product;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.springtesting.model.AbstractAuditingEntity;
import com.springtesting.model.order.Category;
import com.springtesting.model.order.OrderDetail;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "product")
public class Product extends AbstractAuditingEntity implements Serializable
{
    private static final long serialVersionUID = 673660797966130931L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToMany
    @JoinTable(
            name = "product_price",
            joinColumns = @JoinColumn(name = "product_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "price_id", referencedColumnName = "id")
    )
    private List<Price> priceList = new ArrayList<>();


    @ManyToMany(mappedBy = "productList")
    @JsonIgnore
    private List<OrderDetail> ordersList = new ArrayList<>();


    public Product()
    {
    }

    public Product(Long id, String name, Category category)
    {
        this.id = id;
        this.name = name;
        this.category = category;
    }

    @Override
    public String toString()
    {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", category=" + category +
                '}';
    }
}
