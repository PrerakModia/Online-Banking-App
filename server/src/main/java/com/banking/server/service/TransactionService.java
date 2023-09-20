package com.banking.server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banking.server.entity.AccountStatementModel;
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
	
	public List<Transaction> getAccountstatement(AccountStatementModel model){
		List<Transaction> t =transactionRepository.getTransactionBetween(model.getAccountNo(), model.getFromDate(), model.getToDate());
		System.out.println(t);
		System.out.println("Inside transaction service");
		return t;
	}
	
}