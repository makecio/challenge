package com.baluwo.challenge.domain.entity;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "customers")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustomerEntity extends IdEntity implements Serializable {

	@NotNull
	@Valid
	@Column(name = "name", nullable = false)
	private String name;

	@NotNull
	@Valid
	@Column(name = "surname", nullable = false)
	private String surname;

	@NotNull
	@Valid
	@Column(name = "document", nullable = false)
	private String document;

}
