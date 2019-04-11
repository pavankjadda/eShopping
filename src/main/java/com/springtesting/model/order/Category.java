package com.springtesting.model.order;

import com.springtesting.model.AbstractAuditingEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@Table(name = "category")
public class Category extends AbstractAuditingEntity
{

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty
    @Column(name = "name", nullable = false)
    private String name;

}
