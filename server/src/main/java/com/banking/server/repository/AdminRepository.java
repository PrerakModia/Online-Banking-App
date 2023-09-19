package com.banking.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.banking.server.entity.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {

}
