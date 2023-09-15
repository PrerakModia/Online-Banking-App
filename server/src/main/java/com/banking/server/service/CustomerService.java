package com.banking.server.service;

import org.springframework.stereotype.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import com.banking.server.repository.CustomerRepository;
import com.banking.server.entity.Customer;
import com.banking.server.entity.LoginModel;

@Service
public class CustomerService {

	@Autowired
	CustomerRepository customerRepository;
	
	public Customer createCustomer(Customer customer) {
		System.out.println("Inside Service");
		return customerRepository.save(customer);
	}
	
	public Customer getCustomer(long id) {
		Optional<Customer> obj = customerRepository.findById(id);
		if(obj.isPresent()) {
			return obj.get();
		} else {
			return null;
		}
	}
	
	public String validateCustomer(LoginModel customer) {
		Customer c=null;
		String response= "";
		Optional<Customer> obj = customerRepository.findById(customer.getCustomerId());
		if(obj.isPresent()) {
			c=obj.get();		
		}
		if(c==null) {
			response = "Customer Id not found. Please Register";
		}
		else {
			if(customer.getPassword().equals(c.getPassword())) {
				response = "Login success";
			}
			else {
				response = "Incorrect Password";
			}
		}
		return response;
	}
}
