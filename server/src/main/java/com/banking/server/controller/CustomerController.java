package com.banking.server.controller;

import com.banking.server.Exceptions.AccountNotFound;
import com.banking.server.Exceptions.CustomerNotFound;
import com.banking.server.entity.Transaction;
import org.springframework.web.bind.annotation.*;

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
			System.out.println(customer.toString());
			Customer _customer = customerService.createCustomer(customer);
			return new ResponseEntity<>(_customer,HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Customer> getCustomer(@PathVariable("id") long id) throws CustomerNotFound {
		Customer _customer = customerService.getCustomer(id);
		System.out.println(_customer);
		if(_customer == null) return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		return new ResponseEntity<>(_customer, HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/accounts/{id}")
	public ResponseEntity<List<Account>> getAccounts(@PathVariable("id") long id) throws AccountNotFound {
		List<Account> acts = customerService.getAccounts(id);
		if(acts==null) return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		return new ResponseEntity<List<Account>>(acts,HttpStatus.OK);
	}
	
	@PostMapping("/login")
	public String validateCustomer(@Valid @RequestBody LoginModel customer) throws CustomerNotFound {
		System.out.println("Inside login");
		return customerService.validateCustomer(customer);
	}

	@PutMapping("/resetPassword/{OTP}")
	public String changePassword(@RequestBody LoginModel loginModel, @PathVariable("OTP") String otp){
		return customerService.resetPassword(loginModel, otp);
	}
	
	@GetMapping("/allTransactions/{id}")
	public List<Transaction> getAllTransactions(@PathVariable("id") long id) {
		System.out.println(id);
		return customerService.fetchAllUserTransactions(id);
	}
}
