package com.pj.eshopping.domain.user;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;
import java.io.Serial;
import java.io.Serializable;

@Entity
@Table(name = "state")
@Data
public class State implements Serializable {
    @Serial
    private static final long serialVersionUID = 5553856435782266275L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "code")
    private String code;

    @Column(name = "name")
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "country_id")
    @JsonBackReference
    private Country country;


    public State() {
    }

    public State(String name, String code, Country country) {
        this.name = name;
        this.code = code;
        this.country = country;
    }
}
