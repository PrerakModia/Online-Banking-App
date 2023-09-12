package com.banking.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banking.server.entity.Account;
import com.banking.server.entity.Customer;
import com.banking.server.repository.AccountRepository;
import com.banking.server.repository.CustomerRepository;

@Service
public class AccountService {
	@Autowired
	private AccountRepository accountRepository;
	
	@Autowired
	private CustomerRepository customerRepository;
	
	public String addAccount(Account account, Long customerId) {
		try {
			Customer c = customerRepository.findById(customerId).get();
			account.setCustomer(c);
			Account response = accountRepository.save(account);
			if(response != null) {
				return "Account was successfully added!";
			} else {
				return "An Error occurred while creating the account";
			} 
		} catch (Exception E) {
			return E.getMessage();
		}
	}
}