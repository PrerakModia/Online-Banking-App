package com.banking.server.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Data;
import lombok.NonNull;

@Entity
@Data
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long customerId;
	@NonNull
	private String name;
	@NonNull
	private String password;
	@NonNull
	private long mobile;
	@NonNull
	private String email;
	@NonNull
	private String aadhar;//add unique here later
	@NonNull
	private String dob;
	@NonNull
	private String city;
	@NonNull
	private String state;
	@NonNull
	private String middleName;
	
	@OneToMany(mappedBy="customer", fetch=FetchType.EAGER, cascade = CascadeType.ALL)
	private List<Account> accounts;
}