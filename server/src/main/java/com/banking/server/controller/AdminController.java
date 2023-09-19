package com.banking.server.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.banking.server.entity.AdminLoginModel;
import com.banking.server.entity.Admin;
import com.banking.server.service.AdminService;

@RestController
@CrossOrigin("*")
@RequestMapping("/admin")
@Validated
public class AdminController {
	
	@Autowired
	AdminService adminService;
	
	@PostMapping
	public ResponseEntity<Admin> createCustomer(@Valid @RequestBody Admin admin){
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

}
