package com.banking.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.banking.server.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String>{
	
}