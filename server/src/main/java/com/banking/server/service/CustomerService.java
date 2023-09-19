package com.banking.server.service;

import com.banking.server.entity.Transaction;
import org.springframework.stereotype.Service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import com.banking.server.repository.CustomerRepository;
import com.banking.server.entity.Customer;
import com.banking.server.entity.Account;
import com.banking.server.entity.LoginModel;

@Service
public class CustomerService {

	@Autowired
	CustomerRepository customerRepository;
	
	public Customer createCustomer(Customer customer) {
		System.out.println("Inside Service");
		return customerRepository.save(customer);
	}
	
	public Customer getCustomer(long id) {
		Optional<Customer> obj = customerRepository.findById(id);
		if(obj.isPresent()) {
			return obj.get();
		} else {
			return null;
		}
	}

	public String resetPassword(LoginModel loginModel, String otp){
		Optional<Customer> obj = customerRepository.findById(loginModel.getCustomerId());
		Customer customer = null;
		if(obj.isPresent())
		{
			if(otp.equals("123456")){
				obj.get().setPassword(loginModel.getPassword());
				customerRepository.save(obj.get());
				return "Password changed successfully!";
			} else
				return "Invalid OTP";
		}
		else {
			return "Invalid Customer";
		}
	}
	
	public List<Account> getAccounts(long id){
		Customer c = getCustomer(id);
		if(c==null) return null;
		return c.getAccounts();
	}
	
	public String validateCustomer(LoginModel customer) {
		Customer c=null;
		String response= "";
		Optional<Customer> obj = customerRepository.findById(customer.getCustomerId());
		if(obj.isPresent()) {
			c=obj.get();		
		}
		if(c==null) {
			response = "Customer Id not found. Please Register";
		}
		else {
			if(customer.getPassword().equals(c.getPassword())) {
				response = "Login success";
			}
			else {
				response = "Incorrect Password";
			}
		}
		return response;
	}

	public List<Transaction> fetchAllUserTransactions (long id){
		Customer obj = customerRepository.findById(id).orElse(null);
		if(obj == null){
			return null;
		}

		List<Account> accountList = obj.getAccounts();
		List<Transaction> transactionList = new ArrayList<>();
		for(Account acc : accountList){
			transactionList.addAll(acc.getTransactions());
		}
		Set<Transaction> set = new LinkedHashSet<>(transactionList);
		transactionList.clear();
		transactionList.addAll(set);

		return transactionList;
	}
}
