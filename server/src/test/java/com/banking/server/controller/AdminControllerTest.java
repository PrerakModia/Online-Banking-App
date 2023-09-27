package com.banking.server.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

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

import com.banking.server.entity.Admin;
import com.banking.server.entity.AdminLoginModel;
import com.banking.server.service.AdminService;
import com.banking.server.service.CustomerService;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(SpringRunner.class)
@WebMvcTest(AdminController.class)
public class AdminControllerTest {
	
	@Autowired
	private MockMvc mvc;
	
	@MockBean
	private AdminService adminService;
	
	
	private static ObjectMapper mapper = new ObjectMapper();
	
	@Test
	public void createAdminTest() throws Exception {
		Admin admin = new Admin();
		admin.setAdminId(1);
		admin.setEmailId("admin@gmail.com");
		admin.setFirstName("first");
		admin.setLastName("last");
		admin.setMobileNo("9876543210");
		admin.setPassword("admin@1234");
		String json = mapper.writeValueAsString(admin);
		Mockito.when(adminService.createAdmin(admin)).thenReturn(admin);
		MvcResult result = mvc.perform(post("/admin").
				contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
				.content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isCreated()).andReturn();
		Assertions.assertEquals(json,result.getResponse().getContentAsString());
	}
	
	@Test
	public void validateAdminTest() throws Exception {
		AdminLoginModel admin = new AdminLoginModel();
		admin.setAdminId(1);
		admin.setPassword("admin@1234");
		String json = mapper.writeValueAsString(admin);
		Mockito.when(adminService.validateAdmin(admin)).thenReturn("Login Success");
		MvcResult result = mvc.perform(post("/admin/login").
				contentType(MediaType.APPLICATION_JSON).characterEncoding("utf-8")
				.content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andReturn();
		Assertions.assertEquals("Login Success",result.getResponse().getContentAsString());
		
	}

}
