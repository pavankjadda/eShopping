package com.pj.eshopping.domain.category;

import com.pj.eshopping.audit.AbstractAuditingEntity;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serial;
import java.io.Serializable;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@Table(name = "category")
@NamedStoredProcedureQuery(name = "getAllCategoriesThroughStoredProcedureCustom", procedureName = "get_all_categories", resultClasses = Category.class)
public class Category extends AbstractAuditingEntity implements Serializable {
    @Serial
    private static final long serialVersionUID = -6699422774799518217L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description")
    private String description;
}
