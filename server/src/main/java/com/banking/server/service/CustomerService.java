package com.banking.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.banking.server.entity.*;

import com.banking.server.repository.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
	private CustomerRepository customerRepository;
	
	public String createCustomer(Customer customer) {
		System.out.println("inside creating");
		try {
			Customer response = customerRepository.save(customer);
			if(response != null) {
				System.out.println("success");
				return "Customer was successfully created!";
			} else {
				System.out.println("error");
				return "An error occured while creating the customer";
			}
		} catch (Exception E) {
			return E.getMessage();
		}
	}
}