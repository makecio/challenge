package com.baluwo.challenge.domain.entity;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.hibernate.criterion.Order;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "products")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductEntity extends IdEntity implements Serializable {

	@NotNull
	@Valid
	@Column(name = "name", nullable = false)
	private String name;

	@NotNull
	@Valid
	@Column(name = "description", nullable = false)
	private String description;

	@NotNull
	@Valid
	@Column(name = "price", nullable = false)
	private BigDecimal price;

}
