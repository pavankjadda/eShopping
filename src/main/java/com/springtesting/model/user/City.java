package com.springtesting.model.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.springtesting.model.AbstractAuditingEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "city")
@Data
public class City extends AbstractAuditingEntity
{
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    //@Length(max = 100,min = 2)
    private String name;


    @ManyToOne
    @JoinColumn(name = "state_id")
    @JsonIgnore
    private State state;

    public City()
    {
    }

    public City(String name, State state)
    {
        this.name = name;
        this.state = state;
    }
}
