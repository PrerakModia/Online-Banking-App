package com.banking.server.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;

import com.banking.server.service.CustomerService;
import com.banking.server.entity.Customer;
import com.banking.server.entity.Account;
import com.banking.server.entity.LoginModel;

@RestController
@CrossOrigin("*")
@RequestMapping("/customer")
@Validated
public class CustomerController {
	@Autowired
	CustomerService customerService;
	
	@PostMapping
	public ResponseEntity<Customer> createCustomer(@Valid @RequestBody Customer customer){
		try {
			Customer _customer = customerService.createCustomer(customer);
			return new ResponseEntity<>(_customer,HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Customer> getCustomer(@PathVariable("id") long id){
		Customer _customer = customerService.getCustomer(id);
		System.out.println(_customer);
		if(_customer == null) return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		return new ResponseEntity<>(_customer, HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/accounts/{id}")
	public ResponseEntity<List<Account>> getAccounts(@PathVariable("id") long id){
		List<Account> accs = customerService.getAccounts(id);
		if(accs==null) return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		return new ResponseEntity<List<Account>>(accs,HttpStatus.OK);
	}
	
	@PostMapping("/login")
	public String validateCustomer(@Valid @RequestBody LoginModel customer) {
		System.out.println("Inside login");
		return customerService.validateCustomer(customer);
	}
}
