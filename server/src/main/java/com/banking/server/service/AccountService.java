package com.banking.server.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.banking.server.entity.Account;
import com.banking.server.entity.Customer;
import com.banking.server.entity.Transaction;
import com.banking.server.entity.WithdrawModel;
import com.banking.server.repository.AccountRepository;
import com.banking.server.repository.CustomerRepository;
import com.banking.server.repository.TransactionRepository;

@Service
public class AccountService {
	@Autowired
	private AccountRepository accountRepository;
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private TransactionRepository transactionRepository;
	
	public String addAccount(Account account, Long customerId) {
		try {
			long id = accountIdGenerator();
			account.setAccNumber(id);
			Customer c = customerRepository.findById(customerId).get();
			account.setCustomer(c);
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
	
	public Account getAccount(long id) {
		Optional<Account> obj = accountRepository.findById(id);
		if(obj.isPresent()) {
			return obj.get();
		} else {
			return null;
		}
	}
	
	public ResponseEntity<List<Transaction>> getTransactions(Long accId){
		Account acc = getAccount(accId);
		if(acc==null) return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
		return new ResponseEntity<>(acc.getTransactions(),HttpStatus.OK);
	}
	
	@Transactional
	public String withdraw(WithdrawModel model) {
		System.out.println("Inside withdraw service");
		String result = "";
		SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy.HH:mm:ss");
		Account account = accountRepository.findById(model.getAccNumber()).get();
		System.out.println(account);
		if(account.getBalance()-model.getAmount()<0) {
			result = "Transaction Failed due to Insufficient Balance";
		}
		else {
			System.out.println(account.getBalance()-model.getAmount());
			int rowsAffected = accountRepository.withdraw(model.getAmount(),model.getAccNumber());
			if(rowsAffected>0) {
				System.out.println("rows affected");
				result = "Transaction Success";
				Transaction transaction = new Transaction();
				transaction.setAccount(account);
				transaction.setAmount(model.getAmount());
				transaction.setDebitAccount(model.getAccNumber());
				transaction.setStatus("Success");
				transaction.setTxnType("Withdraw");
				transaction.setTimeStamp(df.format(new Date()));
				transactionRepository.save(transaction);
				System.out.println("Transaction table created");
				
			}
			else {
				result = "Transaction Failed";
			}
		}
		return result;
	}
}