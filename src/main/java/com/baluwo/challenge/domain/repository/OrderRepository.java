package com.baluwo.challenge.domain.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.baluwo.challenge.domain.entity.OrderEntity;

public interface OrderRepository extends JpaRepository<OrderEntity, Long> {

}
