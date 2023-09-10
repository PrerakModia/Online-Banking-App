package com.banking.server.repository;

import com.banking.server.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,String>{
	
}
