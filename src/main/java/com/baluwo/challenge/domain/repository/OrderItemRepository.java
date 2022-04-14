package com.baluwo.challenge.domain.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.baluwo.challenge.domain.entity.OrderItemEntity;

public interface OrderItemRepository extends JpaRepository<OrderItemEntity, Long> {

}
