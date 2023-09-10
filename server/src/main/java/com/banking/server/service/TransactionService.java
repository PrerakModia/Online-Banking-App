package com.banking.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banking.server.entity.Transaction;
import com.banking.server.repository.TransactionRepository;

@Service
public class TransactionService {
	@Autowired
	private TransactionRepository transactionRepository;
	
	public String doTransaction (Transaction transaction) {
		Transaction response = transactionRepository.save(transaction);
		try {
			if(response != null) {
				return "Transaction was successfully completed!";	
			} else {
				return "There was an error while completing transaction";
			}
		} catch (Exception E) {
			return E.getMessage();
		}
	}
}