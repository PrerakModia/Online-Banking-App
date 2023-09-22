package com.banking.server.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import com.banking.server.entity.AccountStatementModel;
import com.banking.server.entity.Transaction;
import com.banking.server.service.TransactionService;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(SpringRunner.class)
@WebMvcTest(TransactionController.class)
public class TransactionControllerTest {
	
	@Autowired
	private MockMvc mvc;
	
	@MockBean
	private TransactionService transactionService;
	
	
	private static ObjectMapper mapper = new ObjectMapper();
	
	@Test
	public void getAccountStatementTest() throws Exception {
		AccountStatementModel model = new AccountStatementModel();
		model.setAccountNo(12345);
		model.setFromDate(new Date());
		model.setToDate(new Date());
		List<Transaction> l = new ArrayList();
		String json = mapper.writeValueAsString(l);
		String in = mapper.writeValueAsString(model);
		Mockito.when(transactionService.getAccountstatement(ArgumentMatchers.any())).thenReturn(l);
		MvcResult result = mvc.perform(get("/accountStatement").
				contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
				.content(in).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andReturn();
		Assertions.assertEquals(json,result.getResponse().getContentAsString());
	}

}
