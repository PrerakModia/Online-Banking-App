package com.banking.server.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Account {
	@Id
	private long accNumber;
	private String accType;
	private double balance;
	private String ifscCode;
	private String branch;
	private String openingDate;
}