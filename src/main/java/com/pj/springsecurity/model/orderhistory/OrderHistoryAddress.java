package com.pj.springsecurity.model.orderhistory;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Data
@Table(name = "order_history_address")
public class OrderHistoryAddress implements Serializable
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "address_id")
    private Long addressId;

    @Column(name = "street_name")
    private String streetName;

    @Column(name = "apartment")
    private String apartment;

    @Column(name = "city_id")
    private String city;

    @JoinColumn(name = "state_id")
    private String state;

    @Column(name = "country_id")
    private String country;

    @Column(name = "region_id")
    private String region;

    @Column(name = "zip_code")
    private String zipCode;

    @Column(name = "address_type_id")
    private String addressType;
}
