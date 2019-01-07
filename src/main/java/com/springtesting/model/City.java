package com.springtesting.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "city")
@Data
public class City extends AbstractAuditingEntity
{
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "name")
    //@Length(max = 100,min = 2)
    private String name;

    @ManyToOne
    @JoinColumn(name = "state_id")
    @JsonManagedReference
    private State state;

    public City() { }

    public City( String name, State state)
    {
        this.name = name;
        this.state = state;
    }
}
