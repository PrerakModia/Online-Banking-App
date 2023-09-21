package com.banking.server.entity;

import java.time.LocalDate;
import java.util.Date;

import lombok.Data;

@Data
public class AccountStatementModel {
	private long accountNo;
	private Date fromDate;
	private Date toDate;

}
