package com.banking.server.entity;

import lombok.Data;

@Data
public class FundTransferModel {
	private long fromAccountNo;
	private long toAccountNo;
	private double amount;

}
