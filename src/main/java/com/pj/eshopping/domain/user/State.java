package com.pj.eshopping.domain.user;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serial;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "state")
@Getter
@Setter
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

    @Override
    public int hashCode() {
        return Objects.hash(id, code, name);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof State state)) return false;
        return Objects.equals(id, state.id) && Objects.equals(code, state.code) && Objects.equals(name, state.name);
    }

    @Override
    public String toString() {
        return "State{" +
                "name='" + name + '\'' +
                ", code='" + code + '\'' +
                ", id=" + id +
                '}';
    }
}