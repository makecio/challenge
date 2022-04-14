package com.baluwo.challenge.domain.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import com.baluwo.challenge.domain.enums.StatusOrder;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "orders")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderEntity extends IdEntity implements Serializable {

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_customer")
	private CustomerEntity customer;

	@OneToMany(fetch = FetchType.EAGER, cascade = { CascadeType.ALL })
	@JoinTable(name = "order_vs_itens")
	private List<OrderItemEntity> itens = new ArrayList<>();

	@NotNull
	@Valid
	@Column(name = "dateCreated", nullable = false)
	private LocalDateTime dateCreated;

	@Valid
	@Column(name = "dateUpdated", nullable = true)
	private LocalDateTime dateUpdated;

	@NotNull
	@Valid
	@Column(name = "status", nullable = false)
	private StatusOrder status;

	@NotNull
	@Valid
	@Column(name = "total", nullable = false)
	private BigDecimal total;
}
