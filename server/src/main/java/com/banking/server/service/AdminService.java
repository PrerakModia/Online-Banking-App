package com.banking.server.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banking.server.entity.AdminLoginModel;
import com.banking.server.entity.Admin;
import com.banking.server.entity.Customer;
import com.banking.server.repository.AdminRepository;

@Service
public class AdminService {
	
	@Autowired 
	AdminRepository adminRepository;
	
	public Admin createAdmin(Admin admin) {
		return adminRepository.save(admin);
	}
	
	public String validateAdmin(AdminLoginModel model) {
		Admin a =null;
		String response= "";
		Optional<Admin> obj = adminRepository.findById(model.getAdminId());
		if(obj.isPresent()) {
			a=obj.get();		
		}
		if(a==null) {
			response = "Admin Id not found. Please Enter correct Admin Id.";
		}
		else {
			if(model.getPassword().equals(a.getPassword())) {
				response = "Login success";
			}
			else {
				response = "Incorrect Password";
			}
		}
		return response;
	}

}
