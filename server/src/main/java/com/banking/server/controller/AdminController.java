package com.banking.server.controller;

import javax.validation.Valid;

import com.banking.server.entity.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.banking.server.entity.AdminLoginModel;
import com.banking.server.entity.Admin;
import com.banking.server.service.AdminService;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/admin")
@Validated
public class AdminController {
	
	@Autowired
	AdminService adminService;
	
	@PostMapping
	public ResponseEntity<Admin> createAdmin(@Valid @RequestBody Admin admin){
		try {
			Admin a = adminService.createAdmin(admin);
			return new ResponseEntity<>(a,HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/login")
	public String validateAdmin(@Valid @RequestBody AdminLoginModel admin) {
		System.out.println("Inside login");
		return adminService.validateAdmin(admin);
	}

	@GetMapping("/pendingAccounts")
	public ResponseEntity<?> getPendingAccounts(){
		List<Account> pendingAccounts = adminService.getDisabledAccounts();
		if(pendingAccounts == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new Account[0]);
		return ResponseEntity.status(HttpStatus.OK).body(pendingAccounts);
	}

	@PutMapping("/toggleAccount/{accNo}")
	public ResponseEntity<?> toggleAccounts(@PathVariable("accNo") Long accNo){
		boolean response = adminService.toggleAccount(accNo);
		if(response == false){
			return ResponseEntity.status(HttpStatus.NOT_MODIFIED).body("Account Status was not changed!");
		}
		return ResponseEntity.status(HttpStatus.OK).body("Account Status successfully changed!");
	}

}
