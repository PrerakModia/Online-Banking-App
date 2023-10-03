package com.banking.server.controller;

import org.junit.jupiter.api.*;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.junit.jupiter.api.Assertions;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import static org.junit.Assert.*;  
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import com.banking.server.entity.Account;
import com.banking.server.entity.FundTransferModel;
import com.banking.server.entity.WithdrawModel;
import com.banking.server.service.AccountService;
import com.banking.server.service.CustomerService;
import com.fasterxml.jackson.databind.ObjectMapper;


@RunWith(SpringRunner.class)
@WebMvcTest(AccountController.class)
public class AccountControllerTest {

	@Autowired
	private MockMvc mvc;
	
	@MockBean
	private AccountService accountService;
	
	private static ObjectMapper mapper = new ObjectMapper();
	
	@Test
	public void createAccountTest() throws Exception {
		Account acc = new Account();
		acc.setAccNumber(1);
		acc.setAccType("salary");
		acc.setBalance(0);
		acc.setIfscCode("12345678901");
		acc.setBranch("ETV Bangalore");
		acc.setOpeningDate("13-09-2023");
		acc.setIsCreditCard(false);
		acc.setIsDebitCard(false);
		acc.setIsDisabled(true);
		acc.setIsNetBanking(true);
		Mockito.when(accountService.addAccount(ArgumentMatchers.any(),ArgumentMatchers.any())).thenReturn("Account was successfully created!");
		String json = mapper.writeValueAsString(acc);
		MvcResult result = mvc.perform(post("/account/create/1").
				contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
				.content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andReturn();
		Assertions.assertEquals("Account was successfully created!",result.getResponse().getContentAsString());
	}
	
	@Test
	public void getIFSC() throws Exception{
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("ifsc", "SBIN0000544");
		map.put("branch", "ETV Bangalore");
		String json = mapper.writeValueAsString(map);
		Mockito.when(accountService.getIFSC()).thenReturn(new ResponseEntity<Object>(map, HttpStatus.OK));
		MvcResult result = mvc.perform(get("/account/address")).andExpect(status().isOk()).andReturn();
		Assertions.assertEquals(json,result.getResponse().getContentAsString());
	}
	
	@Test
	public void withdrawAmountTest() throws Exception {
		WithdrawModel model = new WithdrawModel();
		model.setAccNumber(34567);
		model.setAmount(500.00);
		String json = mapper.writeValueAsString(model);
		Mockito.when(accountService.withdraw(ArgumentMatchers.any())).thenReturn("Transaction Success");
		MvcResult result = mvc.perform(put("/account/withdraw").
				contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
				.content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andReturn();
		Assertions.assertEquals("Transaction Success",result.getResponse().getContentAsString());
	}
	
	@Test
	public void depositAmountTest() throws Exception {
		WithdrawModel model = new WithdrawModel();
		model.setAccNumber(34567);
		model.setAmount(500.00);
		String json = mapper.writeValueAsString(model);
		Mockito.when(accountService.deposit(ArgumentMatchers.any())).thenReturn("Transaction Success");
		MvcResult result = mvc.perform(put("/account/deposit").
				contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
				.content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andReturn();
		Assertions.assertEquals("Transaction Success",result.getResponse().getContentAsString());
	}
	
	@Test
	public void fundTransferTest() throws Exception {
		FundTransferModel model = new FundTransferModel();
		model.setFromAccountNo(12345);
		model.setToAccountNo(67890);
		model.setAmount(500.00);
		String json = mapper.writeValueAsString(model);
		Mockito.when(accountService.fundTransfer(ArgumentMatchers.any())).thenReturn("Transaction Success");
		MvcResult result = mvc.perform(put("/account/fundTransfer").
				contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
				.content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andReturn();
		Assertions.assertEquals("Transaction Success",result.getResponse().getContentAsString());
	}
	
	@Test
	public void getTransactionsTest() throws Exception{
		List l = new ArrayList();
		String json = mapper.writeValueAsString(l);
		Mockito.when(accountService.getTransactions(ArgumentMatchers.any())).thenReturn(new ResponseEntity<>(l, HttpStatus.OK));
		MvcResult result = mvc.perform(get("/account/transactions/1234")).andExpect(status().isOk()).andReturn();
		Assertions.assertEquals(json,result.getResponse().getContentAsString());
	}
	
}
