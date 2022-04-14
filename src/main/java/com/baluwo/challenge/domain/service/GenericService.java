package com.baluwo.challenge.domain.service;

import java.io.Serializable;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.baluwo.challenge.domain.entity.IdEntity;
import com.baluwo.challenge.exception.ApiException;
import com.baluwo.challenge.exception.NotFoundException;
import com.baluwo.challenge.utils.ServiceMap;
import com.sun.istack.NotNull;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@Validated
public abstract class GenericService<T extends IdEntity, ID extends Serializable> implements ServiceMap {

	@Autowired
	protected JpaRepository<T, ID> genericRepository;

	@Autowired
	private Environment env;

	@GetMapping()
	public ResponseEntity<List<T>> getAll() {

		try {

			List<T> list = this.genericRepository.findAll();

			log.info(env.getProperty("msg.success"));
			return new ResponseEntity<>(list, HttpStatus.OK);

		} catch (Exception e) {
			throw new ApiException(env.getProperty("msg.exception.internalerror") + e.getMessage());
		}

	}

	@GetMapping("/{id}")
	public ResponseEntity<T> getById(@NotNull @PathVariable ID id) {

		T objBD = genericRepository.findById(id)
				.orElseThrow(() -> new NotFoundException(env.getProperty("msg.exception.datanotfound") + id));

		log.info(env.getProperty("msg.success"));
		return new ResponseEntity<>(objBD, HttpStatus.OK);

	}

	@PostMapping()
	public ResponseEntity<T> save(@NotNull @Valid @RequestBody T obj) {

		try {

			log.info(env.getProperty("msg.save.success"));
			return new ResponseEntity<>(genericRepository.saveAndFlush(obj), HttpStatus.OK);

		} catch (Exception e) {
			throw new ApiException(env.getProperty("msg.exception.internalerror") + e.getMessage());
		}

	}

	@PostMapping("/saveAll")
	public ResponseEntity<List<T>> saveAll(@NotNull @Valid @RequestBody List<T> list) {

		try {

			log.info(env.getProperty("msg.save.success"));
			return new ResponseEntity<>(genericRepository.saveAll(list), HttpStatus.OK);

		} catch (Exception e) {
			throw new ApiException(env.getProperty("msg.exception.internalerror") + e.getMessage());
		}

	}

	@PutMapping("/{id}")
	public ResponseEntity<T> update(@Valid @NotNull @RequestBody T  obj, @NotNull @PathVariable ID id) {

		T objBD = genericRepository.findById(id)
				.orElseThrow(() -> new NotFoundException(env.getProperty("msg.exception.datanotfound") + id));

		obj.setId(objBD.getId());

		log.info(env.getProperty("msg.update.success"));
		return new ResponseEntity<>(genericRepository.save(obj), HttpStatus.OK);

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@NotNull @PathVariable ID id) {

		T objBD = genericRepository.findById(id)
				.orElseThrow(() -> new NotFoundException(env.getProperty("msg.exception.datanotfound") + id));

		log.info(env.getProperty("msg.delete.success"));

		genericRepository.delete(objBD);
		return new ResponseEntity<>(HttpStatus.OK);

	}

}
