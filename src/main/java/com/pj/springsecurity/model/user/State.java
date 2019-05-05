package com.pj.springsecurity.model.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "state")
@Data
public class State implements Serializable
{
    private static final long serialVersionUID = 5553856435782266275L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "code")
    private String code;

    @Column(name = "name")
    @Length(max = 200, min = 2)
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "country_id")
    @JsonIgnore
    private Country country;


    public State()
    {
    }

    public State(@Length(max = 100, min = 2) String name, String code, Country country)
    {
        this.name = name;
        this.code = code;
        this.country = country;
    }
}
