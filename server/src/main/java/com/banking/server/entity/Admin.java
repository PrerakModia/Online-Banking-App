package com.banking.server.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;

import lombok.Data;
import lombok.NonNull;

@Entity
@Data
public class Admin {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long adminId;
	@NonNull
	private String firstName;
	@NonNull
	private String lastName;
	@NonNull
	private String password;
	@Pattern(regexp = "\\d{10}", message = "Mobile number should be 10 digits")
	@Column(nullable=false)
	private String mobileNo;
	@Email(message = "Please enter a valid email")
	@Column(nullable=false)
	private String emailId;
	
	public Admin() {}

}
