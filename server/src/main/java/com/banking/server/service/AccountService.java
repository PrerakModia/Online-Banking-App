package com.banking.server.service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
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
import com.banking.server.entity.AccountStatementModel;
import com.banking.server.entity.Customer;
import com.banking.server.entity.FundTransferModel;
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
		System.out.println(model.toString());
		String result = "";
		Account account = accountRepository.findById(model.getAccNumber()).get();
		if(account.getBalance()-model.getAmount()<0)
			result = "Transaction Failed due to insufficient balance";
		else {
			int rowsAffected = accountRepository.withdraw(model.getAmount(), model.getAccNumber());
			if(rowsAffected>0)
				result = "Transaction Success";
			else
				result = "Transaction Failed";
		}
		Transaction transaction = new Transaction();
		transaction.setAccount(account);
		transaction.setAmount(model.getAmount());
		transaction.setDebitAccount(model.getAccNumber());
		transaction.setStatus(result);
		transaction.setTxnType("Withdraw");
		transaction.setTimeStamp(new Date());
		transactionRepository.save(transaction);
		System.out.println(transaction.getAccount().getAccNumber());
		return result;
	}
	
	@Transactional
	public String deposit(WithdrawModel model) {
		String result = "";
		Account account = accountRepository.findById(model.getAccNumber()).get();
		int rowsAffected = accountRepository.deposit(model.getAmount(), model.getAccNumber());
		if(rowsAffected>0)
			result = "Transaction Success";
		else 
			result = "Transaction Failed";
		Transaction transaction = new Transaction();
		transaction.setAccount(account);
		transaction.setAmount(model.getAmount());
		transaction.setCreditAccount(model.getAccNumber());
		transaction.setStatus(result);
		transaction.setTxnType("Deposit");
		transaction.setTimeStamp(new Date());
		transactionRepository.save(transaction);
		return result;
		
	}
	
	@Transactional
	public String fundTransfer(FundTransferModel model) {
		String result = "";
		Account debitAccount = accountRepository.findById(model.getFromAccountNo()).get();
		Optional<Account> creditAccount = accountRepository.findById(model.getToAccountNo());
		System.out.println(creditAccount);
		if(!creditAccount.isPresent())
			result = "Receivers account Not Found";
		else {
			if(debitAccount.getBalance()-model.getAmount() < 0)
				result = "Transaction Failed due to insufficient Balance";
			else {
				int debitRows = accountRepository.withdraw(model.getAmount(), model.getFromAccountNo());
				int creditRows = accountRepository.deposit(model.getAmount(), model.getToAccountNo());
				if(debitRows>0 && creditRows >0)
					result = "Transaction Success";
				else
					result = "Transaction Failed";
			}
		}
		//SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy.HH:mm:ss");
		Transaction transaction = new Transaction();
		transaction.setAccount(debitAccount);
		transaction.setAmount(model.getAmount());
		transaction.setCreditAccount(model.getToAccountNo());
		transaction.setDebitAccount(model.getFromAccountNo());
		transaction.setStatus(result);
		transaction.setTxnType("FundTransfer");
		transaction.setTimeStamp(new Date());
		transactionRepository.save(transaction);
		return result;
	}
}