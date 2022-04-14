package com.baluwo.challenge.domain.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.baluwo.challenge.domain.entity.ProductEntity;

public interface ProductRepository extends JpaRepository<ProductEntity, Long> {

}
