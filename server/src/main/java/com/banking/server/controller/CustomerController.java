package com.banking.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.banking.server.entity.Customer;
import com.banking.server.service.CustomerService;

@RestController
@CrossOrigin
public class CustomerController {
	@Autowired
	private CustomerService customerService;
	
	@PostMapping("/createCustomer")
	public String createCustomer(@RequestParam Customer customer) {
//		System.out.println(customer);
		System.out.println("inside controller");
//		return customerService.createCustomer(customer);
		return "Done";
	}
}