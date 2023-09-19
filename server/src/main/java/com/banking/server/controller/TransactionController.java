package com.banking.server.controller;

import com.banking.server.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Validated
@CrossOrigin("*")
public class TransactionController {
    @Autowired
    private TransactionService transactionService;

//    @GetMapping("/getTransactions/{customerId}")
}
