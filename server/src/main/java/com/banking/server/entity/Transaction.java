package com.banking.server.entity;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;
import lombok.NonNull;

@Entity
@Data
public class Transaction {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NonNull
	private long txnId;
	@NonNull
	private String txnType;
	@NonNull
	private double amount;
	private long debitAccount;
	private long creditAccount;
	@NonNull
	private Date timeStamp;
	@NonNull
	private String status;
	
	public Transaction() {}
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name="accNumber")
	private Account account;
}