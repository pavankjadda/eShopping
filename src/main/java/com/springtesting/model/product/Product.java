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

    @Column(name = "description",length = 10000)
    private String description;

    @ManyToOne
    @JoinColumn(name = "category_id",referencedColumnName = "id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "manufacturer_id",referencedColumnName = "id")
    private Manufacturer manufacturer;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "price_id")
    private Price price;

    @OneToMany
    @JoinTable(
            name = "product_photo",
            joinColumns = @JoinColumn(name = "product_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "photo_id", referencedColumnName = "id")
    )
    private List<Photo> photoList=new ArrayList<>();


    @ManyToMany(mappedBy = "productList")
    @JsonIgnore
    private List<OrderDetail> ordersList = new ArrayList<>();


    @Override
    public String toString()
    {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", category=" + category +
                '}';
    }
}
