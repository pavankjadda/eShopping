package com.pj.eshopping.domain.user;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import java.io.Serial;
import java.io.Serializable;


@Entity
@Table(name = "country")
@Data
public class Country implements Serializable {
    @Serial
    private static final long serialVersionUID = 6396100319470393108L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    @Length(max = 200, min = 2)
    private String name;

    @Column(name = "code")
    @Length(max = 3, min = 2)
    private String code;

    @Column(name = "iso_code")
    @Length(max = 3, min = 2)
    private String isoCode;

    @ManyToOne
    @JoinColumn(name = "region_id")
    private Region region;

    public Country() {
    }

    public Country(String name) {
        this.name = name;
    }

    public Country(@Length(max = 100, min = 2) String name, Region region) {
        this.name = name;
        this.region = region;
    }

    public Country(@Length(max = 200, min = 2) String name, @Length(max = 200, min = 2) String code, @Length(max = 2, min = 2) String isoCode, Region region) {
        this.name = name;
        this.code = code;
        this.isoCode = isoCode;
        this.region = region;
    }

    public Country(@Length(max = 200, min = 2) String name, @Length(max = 200, min = 2) String code, @Length(max = 2, min = 2) String isoCode) {
        this.name = name;
        this.code = code;
        this.isoCode = isoCode;
    }
}
