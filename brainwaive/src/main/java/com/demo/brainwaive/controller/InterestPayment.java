package com.demo.brainwaive.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.brainwaive.model.Customer;
import com.demo.brainwaive.model.GoldLoanPayVO;
import com.demo.brainwaive.service.PaymentService;

@RestController
@EnableAutoConfiguration
public class InterestPayment {
	
	
	@Autowired
	private PaymentService paymentService;
	
	@GetMapping("/interest")
	public Customer getInterest(final HttpServletResponse response){
		response.setHeader("Cache-Control", "no-cache");
		 response.setHeader("Access-Control-Allow-Origin", "*");
		GoldLoanPayVO goldLoanPay = new GoldLoanPayVO();
		goldLoanPay.setAmountDue(10);
		goldLoanPay.setLoanNumber(123);
		Customer customer=paymentService.doPayment(goldLoanPay);
		return customer;
	}
	
	@PostMapping(value="/interestpay", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public Customer payInterest(@RequestBody GoldLoanPayVO goldLoanPay, final HttpServletResponse response){
		System.out.println("payInterest!!\n");
		 response.setHeader("Cache-Control", "no-cache");
		 response.setHeader("Access-Control-Allow-Origin", "*");
		 response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
		 response.setHeader("Access-Control-Allow-Credentials", "true");
		 response.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization");
		System.out.println("customer id : "+ goldLoanPay.getLoanNumber());
		Customer customer = null;
		if(null != goldLoanPay && goldLoanPay.getLoanNumber() > 0){
			customer=paymentService.doPayment(goldLoanPay);
		}
		return customer;
	}

}
