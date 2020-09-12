package com.demo.brainwaive.service;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import com.demo.brainwaive.model.Customer;
import com.demo.brainwaive.model.Customers;
import com.demo.brainwaive.model.GoldLoanPayVO;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
@Service
public class PaymentService {
	
	    
    public Customer doPayment(GoldLoanPayVO goldLoanPay){
    	//create ObjectMapper instance
        ObjectMapper objectMapper = new ObjectMapper();
        
        //read json file and convert to customer object
        Customer customer= null;
        Customers customers= null;
		try {
			File resource = new ClassPathResource(
	        	      "customer.json").getFile();
			customers = objectMapper.readValue(resource, Customers.class);
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

        //print customer details
        System.out.println(customers);
        customer= findCustomerById(goldLoanPay.getLoanNumber(), customers.getCustomers());
        System.out.println(customer);
        loanSettlement(customer,goldLoanPay);
        return customer;
    }
    
    private void loanSettlement(Customer customer, GoldLoanPayVO goldLoanPay) {
		if(goldLoanPay.getAmountDue() >0 ){
			customer.setAmountDue(customer.getAmountDue() - goldLoanPay.getAmountDue() );
		}
		
	}

	public Customer findCustomerById(
    		  long id, List<Customer> customers) {
    		 
    		    for (Customer customer : customers) {
    		        if (customer.getId().equals(id)) {
    		            return customer;
    		        }
    		    }
    		    return null;
    		}

}
