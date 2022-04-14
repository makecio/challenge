package com.baluwo.challenge.app.rest;

import org.springframework.context.annotation.PropertySource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baluwo.challenge.domain.entity.OrderEntity;
import com.baluwo.challenge.domain.service.GenericService;
import com.baluwo.challenge.utils.ServicePath;

@CrossOrigin(allowCredentials = "true", allowedHeaders = "*")
@RestController
@PropertySource({ "classpath:/messages.properties" })
@RequestMapping(path = ServicePath.ORDER_PATH)
public class OrderController extends GenericService<OrderEntity, Long> {

}