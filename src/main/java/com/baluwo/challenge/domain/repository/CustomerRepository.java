package com.baluwo.challenge.domain.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.baluwo.challenge.domain.entity.CustomerEntity;

public interface CustomerRepository extends JpaRepository<CustomerEntity, Long> {

}
