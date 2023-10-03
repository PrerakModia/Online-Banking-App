package com.banking.server.controller;

import java.util.List;

import com.banking.server.Exceptions.AccountNotFound;
import com.banking.server.Exceptions.CustomerNotFound;
import com.banking.server.Exceptions.TransactionDeclinedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.banking.server.entity.Account;
import com.banking.server.entity.Customer;
import com.banking.server.entity.FundTransferModel;
import com.banking.server.entity.Transaction;
import com.banking.server.entity.WithdrawModel;
import com.banking.server.service.AccountService;

@RestController
@CrossOrigin("*")
@RequestMapping("/account")
public class AccountController {
	
	@Autowired
	private AccountService accountService;
	
	@PostMapping("/create/{cId}")
	public String CreateAccount(@RequestBody Account account, @PathVariable("cId") Long customerId) throws CustomerNotFound {
		return accountService.addAccount(account, customerId);
	}
	
	@GetMapping("/{address}")
	public ResponseEntity<Object> getIFSC(@PathVariable("address") String address) throws AccountNotFound {
		return accountService.getIFSC();
	}
	
	@GetMapping("/transactions/{accId}")
	public ResponseEntity<List<Transaction>> getTransactions(@PathVariable("accId") Long accId) throws AccountNotFound {
		System.out.println("INSIDE TRANSACTION CONTROLLER");
		return accountService.getTransactions(accId);
	}
	
	@PutMapping("/withdraw")
	public String withdrawAmount(@RequestBody WithdrawModel model) throws TransactionDeclinedException {
		System.out.println();
		System.out.println("Inside withdraw controller");
		return accountService.withdraw(model);
	}
	
	@PutMapping("/deposit")
	public String depositAmount(@RequestBody WithdrawModel model) throws TransactionDeclinedException {
		return accountService.deposit(model);
	}
	
	@PutMapping("/fundTransfer")
	public String fundTransfer(@RequestBody FundTransferModel model) throws TransactionDeclinedException {
		return accountService.fundTransfer(model);
	}

}
