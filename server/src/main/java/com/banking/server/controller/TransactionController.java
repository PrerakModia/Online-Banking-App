package com.banking.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.banking.server.entity.AccountStatementModel;
import com.banking.server.entity.Transaction;
import com.banking.server.service.TransactionService;

@RestController
@CrossOrigin("*")
public class TransactionController {
	@Autowired
	TransactionService transactionservice;
	
	@PostMapping("/accountStatement")
	public List<Transaction> getAccountStatement(@RequestBody AccountStatementModel model){
		return transactionservice.getAccountstatement(model);
		
	}

}
