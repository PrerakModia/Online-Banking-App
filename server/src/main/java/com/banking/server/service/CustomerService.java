package com.banking.server.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.banking.server.repository.CustomerRepository;
import com.banking.server.entity.Customer;

@Service
public class CustomerService {

	@Autowired
	CustomerRepository customerRepository;
	
	public Customer createCustomer(Customer customer) {
		return customerRepository.save(customer);
	}
}
