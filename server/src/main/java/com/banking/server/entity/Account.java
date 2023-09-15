package com.banking.server.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;
import lombok.NonNull;

@Entity
@Data
@Table(name="account")
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
	
	
	@JsonManagedReference
	@OneToMany(mappedBy="account", fetch=FetchType.EAGER, cascade = CascadeType.ALL)
	private List<Transaction> transactions;
	
	@JsonBackReference
	@ManyToOne()
	@JoinColumn(name="customerId")
	private Customer customer;
	
	public Account() {}
}