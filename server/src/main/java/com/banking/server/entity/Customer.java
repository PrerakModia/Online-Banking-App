package com.banking.server.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import javax.persistence.OneToMany;

import lombok.Data;

@Data
@Entity
@Table(name="customer")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long customerId;
	
	@Column(name="name",nullable=false)
	private String name;
		
	@Size(min = 8, max = 12)
	@Column(name="password",nullable=false)
	private String password;	

	@Pattern(regexp = "\\d{10}", message = "Mobile number should be 10 digits")
	@Column(name="mobile",nullable=false)
	private String mobile;
	
	@Email(message = "Please enter a valid email")
	@Column(name="email",nullable=false)
	private String email;
	
	@Pattern(regexp = "\\d{12}", message = "Aadhar number should be 12 digits")
	@Column(name="aadhar",unique=true,nullable=false)
	private String aadhar;
	
	@Column(name="dob",nullable=false)
	private String dob;
	
	@Column(name="city",nullable=false)
	private String city;
	@Column(name="state",nullable=false)
	private String state;
	@Column(name="middleName",nullable=false)
	private String middleName;
	
	@OneToMany(mappedBy="customer", fetch=FetchType.EAGER, cascade = CascadeType.ALL)
	private List<Account> accounts;
	
	public Customer() {}
	
	public Customer(long customerId, String name, String password, String mobile, String email, String aadhar, String dob, String city, String state, String middleName) {
		this.customerId = customerId;
		this.name= name;
		this.password = password;
		this.mobile= mobile;
		this.email=email;
		this.aadhar=aadhar;
		this.dob=dob;
		this.city=city;
		this.state=state;
		this.middleName=middleName;
	}
	
	public String toString() {
		return "Customer = customerId : "+this.customerId + " , name : " + this.name + " , password : " + this.password + " , email : " + this.email + ", aadhar : " + this.aadhar + ", dob : " + this.dob + ", city : " + this.city + ", state : " + this.state + ", middleName : " + this.middleName;
	}
}