package com.banking.server.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.Data;
import lombok.NonNull;

@Entity
@Data
public class Account {
	@Id
	private long accNumber;
	@NonNull
	private String accType;
	@NonNull
	private double balance;
	@NonNull
	private String ifscCode;
	@NonNull
	private String branch;
	@NonNull
	private String openingDate;
	
	private boolean isCreditCard;
	
	private boolean isDebitCard;
	
	private boolean isNetBanking;
	
	
	@OneToMany
	@JoinColumn(name="accNumber")
	private List<Transaction> transactions;
	
	@ManyToOne
	@JoinColumn(name="customerId")
	private Customer customer;
	
	public Account() {}
}