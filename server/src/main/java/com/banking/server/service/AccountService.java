package com.banking.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banking.server.entity.Account;
import com.banking.server.repository.AccountRepository;

@Service
public class AccountService {
	@Autowired
	private AccountRepository accountRepository;
	
	public String addAccount(Account account) {
		try {
			Account response = accountRepository.save(account);
			if(response != null) {
				return "Account was successfully added!";
			} else {
				return "An Error occurred while saving the account";
			} 
		} catch (Exception E) {
			return E.getMessage();
		}
	}
}