package com.pj.eshopping.domain.category;

import com.pj.eshopping.audit.AbstractAuditingEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serial;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Getter
@Setter
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

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Category category = (Category) o;
        return Objects.equals(id, category.id) && Objects.equals(name, category.name) &&
                Objects.equals(description, category.description);
    }
}