package com.pj.eshopping.audit;

import lombok.Data;
import org.hibernate.envers.Audited;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;
import java.time.LocalDateTime;

@MappedSuperclass
@Audited
@EntityListeners(AuditingEntityListener.class)
@Data
public abstract class AbstractAuditingEntity implements Serializable
{
	private static final long serialVersionUID = -1773219999574011842L;

	@CreatedBy
	@Column(name = "created_by", length = 100)
	private String createdBy;

	@CreatedDate
	@Column(name = "created_date")
	private LocalDateTime createdDate;

	@LastModifiedBy
	@Column(name = "last_modified_by", length = 100)
	private String lastModifiedBy;

	@LastModifiedDate
	@Column(name = "last_modified_date")
	private LocalDateTime lastModifiedDate;

}
