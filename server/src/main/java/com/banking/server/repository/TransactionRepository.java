package com.banking.server.repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.banking.server.entity.Transaction;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
	
	@Query("select t from Transaction t where t.account.accNumber=?1 and (t.timeStamp between ?2 and ?3) ")
	//@Query("select t from Transaction t where t.account.accNumber=?1")
	public List<Transaction> getTransactionBetween(long accountNo, Date fromDate, Date toDate);
	
}