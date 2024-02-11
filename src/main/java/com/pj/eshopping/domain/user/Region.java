package com.pj.eshopping.domain.user;


import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import java.io.Serial;
import java.io.Serializable;

@Entity
@Table(name = "region")
@Data
public class Region implements Serializable {
    @Serial
    private static final long serialVersionUID = 7515965324996283939L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    @Length(max = 20, min = 2)
    private String name;

    public Region() {
    }

    public Region(@Length(max = 20, min = 2) String name) {
        this.name = name;
    }
}
