package com.banking.server.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;
import lombok.NonNull;

@Entity
@Data
public class Transaction {
	@Id
	@GeneratedValue
	@NonNull
	private long txnId;
	@NonNull
	private String txnType;
	@NonNull
	private double amount;
	@NonNull
	private long debitAccount;
	@NonNull
	private long creditAccount;
	@NonNull
	private String timeStamp;
	@NonNull
	private String status;
	
	@ManyToOne
	@JoinColumn(name="accountNumber")
	private Account accountNumber;
}