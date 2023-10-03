package com.banking.server.entity;

import lombok.Data;

@Data
public class WithdrawModel {
	private long accNumber;
	private double amount;

}
