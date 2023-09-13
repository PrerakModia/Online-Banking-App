package com.banking.server.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
			long id = accountIdGenerator();
			account.setAccNumber(id);
			Customer c = customerRepository.findById(customerId).get();
			account.setCustomer(c);
//			System.out.println(account);
//			List<Account> accounts = c.getAccounts();
//			accounts.add(account);
//			c.setAccounts(accounts);
//			customerRepository.save(c);
			Account response = accountRepository.save(account);
			if(response != null) {
				return "Account was successfully created!";
			} else {
				return "An Error occurred while creating the account";
			} 
		} catch (Exception E) {
			return E.getMessage();
		}
	}
	
	private long accountIdGenerator() {
		Random random = new Random();
		long id = (long) (100000000000000L + random.nextFloat() * 900000000000000L);
		Optional<Account> obj = accountRepository.findById(id);
		if(obj.isPresent()) return accountIdGenerator();
		else return id;
		
	}
	
	public ResponseEntity<Object> getIFSC(){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("ifsc", "SBIN0000544");
		map.put("branch", "ETV Bangalore");
		return new ResponseEntity<Object>(map, HttpStatus.OK);
		
	}
}