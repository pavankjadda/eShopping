package com.springtesting.model.product;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.springtesting.model.AbstractAuditingEntity;
import com.springtesting.model.user.Address;
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
public class Manufacturer  extends AbstractAuditingEntity implements Serializable
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description",length = 10000)
    private String description;

    @Column(name = "address")
    private Address address;

    @Column(name = "contact_email")
    private String contactEmail;

    @Column(name = "phone")
    private String phone;

    @Column(name = "fax")
    private String fax;

    @OneToMany(mappedBy = "manufacturer")
    @JsonIgnore
    private List<Product> products=new ArrayList<>();


}
