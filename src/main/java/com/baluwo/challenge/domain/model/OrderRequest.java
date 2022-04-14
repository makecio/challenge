package com.baluwo.challenge.domain.model;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import com.baluwo.challenge.domain.enums.StatusOrder;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderRequest {

	@NotNull
	@Valid
	private Long id;

	@NotNull
	@Valid
	private StatusOrder status;

}
