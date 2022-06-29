package com.pj.eshopping.domain.user;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;
import java.io.Serial;
import java.io.Serializable;
import java.util.Collection;

@Entity
@Data
@Table(name = "privilege")
public class Privilege implements Serializable {
    @Serial
    private static final long serialVersionUID = -5270912171640429546L;
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @ManyToMany(mappedBy = "privileges")
    @JsonBackReference
    private Collection<Role> roles;

    public Privilege() {
    }

    public Privilege(String name) {
        this.name = name;
    }


    public Privilege(String name, Collection<Role> roles) {
        this.name = name;
        this.roles = roles;
    }

    @Override
    public String toString() {
        return "Privilege{" + "id=" + id + ", name='" + name + '\'' + '}';
    }
}
