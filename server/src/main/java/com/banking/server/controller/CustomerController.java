package com.banking.server.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.banking.server.service.CustomerService;
import com.banking.server.entity.Customer;
import com.banking.server.entity.LoginModel;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/customer")
public class CustomerController {
	@Autowired
	CustomerService customerService;
	
	@PostMapping
	public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer){
		System.out.println("Inside Controller");
		System.out.println(customer.toString());
		try {
			Customer _customer = customerService.createCustomer(customer);
			return new ResponseEntity<>(_customer,HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/login")
	public String validateCustomer(@RequestBody LoginModel customer) {
		System.out.println("Inside login");
		return customerService.validateCustomer(customer);
	}
}
