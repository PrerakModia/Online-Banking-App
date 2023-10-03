package com.banking.server.repository;

import com.banking.server.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.banking.server.entity.Admin;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {

    @Query("SELECT acc FROM Account acc where acc.isDisabled = true")
    public List<Account> getDisabledAccounts();

    @Query("SELECT acc FROM Account acc where acc.isDisabled = false")
    public List<Account> getApprovedAccounts();

    @Query("Update Account acc SET acc.isDisabled = ?2 WHERE acc.accNumber = ?1")
    @Transactional
    @Modifying
    public int updateIsDisabled(long accNumber, boolean status);

}
