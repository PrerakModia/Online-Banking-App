package com.banking.server.controller;

import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.MediaType;

import com.banking.server.entity.Account;
import com.banking.server.entity.Customer;
import com.banking.server.entity.LoginModel;
import com.banking.server.service.CustomerService;
import com.fasterxml.jackson.databind.ObjectMapper;


@RunWith(SpringRunner.class)
@WebMvcTest(CustomerController.class)
public class CustomerControllerTest {
	
	@Autowired
	private MockMvc mvc;
	
	@MockBean
	private CustomerService customerService;
	
	
	private static ObjectMapper mapper = new ObjectMapper();
	
	@Test
	public void createCustomerTest() throws Exception {
		Customer customer = new Customer();
		customer.setFirstName("Vani");
		customer.setCustomerId(1);
		customer.setAadhar("123456789087");
		customer.setCity("Guntur");
		customer.setDob("23-09-2002");
		customer.setEmail("vani@gmail.com");
		customer.setLastName("Sree");
		customer.setMobile("9876543210");
		customer.setOccupation("Engineer");
		customer.setPassword("vani@123");
		customer.setSalary(20000.00);
		customer.setState("AP");
		Mockito.when(customerService.createCustomer(ArgumentMatchers.any())).thenReturn(customer);
		String json = mapper.writeValueAsString(customer);
		MvcResult result = mvc.perform(post("/customer").
				contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
				.content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isCreated()).andReturn();
		Assertions.assertEquals(json,result.getResponse().getContentAsString());
	}
	
	@Test
	public void validateCustomerTest() throws Exception{
		LoginModel l = new LoginModel();
		l.setCustomerId((long) 1);
		l.setPassword("random@123");
		String json = mapper.writeValueAsString(l);
		Mockito.when(customerService.validateCustomer(ArgumentMatchers.any())).thenReturn("Login Succes");
		MvcResult result = mvc.perform(post("/customer/login").
				contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
				.content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andReturn();
		Assertions.assertEquals("Login Succes",result.getResponse().getContentAsString());
	}
	
	@Test
	public void getCustomerTest() throws Exception{
		Customer customer = new Customer();
		customer.setFirstName("Vani");
		customer.setCustomerId(1);
		customer.setAadhar("123456789087");
		customer.setCity("Guntur");
		customer.setDob("23-09-2002");
		customer.setEmail("vani@gmail.com");
		customer.setLastName("Sree");
		customer.setMobile("9876543210");
		customer.setOccupation("Engineer");
		customer.setPassword("vani@123");
		customer.setSalary(20000.00);
		customer.setState("AP");
		String json = mapper.writeValueAsString(customer);
		Mockito.when(customerService.getCustomer(1)).thenReturn(customer);
		MvcResult result = mvc.perform(get("/customer/1"))
			      .andExpect(status().isAccepted()).andReturn();
		Assertions.assertEquals(json,result.getResponse().getContentAsString());
	}
	
	@Test
	public void getCustomerFailureTest() throws Exception{
		Customer c = new Customer();
		Mockito.when(customerService.getCustomer(ArgumentMatchers.anyInt())).thenReturn(c);
		mvc.perform(get("/customer/{id}",1)
			      .contentType(MediaType.APPLICATION_JSON))
			      .andExpect(status().isBadRequest());
		
	}
	
	@Test
	public void getAccountsTest() throws Exception{
		Account a = new Account();
		a.setAccNumber(1234);
		a.setAccType("savings");
		a.setBalance(200.00);
		a.setBranch("Banglore");
		a.setDisabled(false);
		a.setIfscCode("5675");
		a.setOpeningDate("23-06-2023");
		List l = new ArrayList();
		l.add(a);
		String json = mapper.writeValueAsString(l);
		Mockito.when(customerService.getAccounts(1)).thenReturn(l);
		MvcResult result = mvc.perform(get("/customer/accounts/1"))
			      .andExpect(status().isOk()).andReturn();
		Assertions.assertEquals(json,result.getResponse().getContentAsString());
		
		
		
	}

}


