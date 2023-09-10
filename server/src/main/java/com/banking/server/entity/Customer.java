package com.banking.server.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;
import lombok.NonNull;

@Entity
@Data
public class Customer {
	@Id
	@NonNull
	private String customerId;
	
	@NonNull
	private String name;
	
	@NonNull
	private String password;
	
	@NonNull
	private long mobile;
	
	@NonNull
	private String email;
	
	@NonNull
	private String aadhar;
	
	@NonNull
	private String dob;
	private String currentAddress;
	private String permanentAddress;
	private String fatherName;
	private String motherName;	
	
}