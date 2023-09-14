package com.banking.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.banking.server.entity.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
	
	@Modifying
	@Query("update Account account set account.balance=account.balance-?1 where account.accNumber=?2" )
	public int withdraw(double amount,long accountno);
}