package com.banking.server.controller;

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
import com.banking.server.entity.WithdrawModel;
import com.banking.server.service.AccountService;

@RestController
@CrossOrigin("*")
@RequestMapping("/account")
public class AccountController {
	
	@Autowired
	private AccountService accountService;
	
	@PostMapping("/create/{cId}")
	public String CreateAccount(@RequestBody Account account, @PathVariable("cId") Long customerId) {
		return accountService.addAccount(account, customerId);
	}
	
	@GetMapping("/{address}")
	public ResponseEntity<Object> getIFSC(@PathVariable("address") String address){
		return accountService.getIFSC();
	}
	
	@PutMapping("/withdraw")
	public String withdrawAmount(@RequestBody WithdrawModel model) {
		System.out.println("Inside withdraw controller");
		return accountService.withdraw(model);
	}

}
