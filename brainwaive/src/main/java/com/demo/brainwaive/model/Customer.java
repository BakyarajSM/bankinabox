package com.demo.brainwaive.model;

import java.util.List;
import java.util.Map;

public class Customer {

    private Long id;
    private String name;
    private String email;
    private String phone;
    private int age;
    private Address address;
    private List<String> paymentMethods;
    private Map<String, Object> profileInfo;
    private double amountDue;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public List<String> getPaymentMethods() {
        return paymentMethods;
    }

    public void setPaymentMethods(List<String> paymentMethods) {
        this.paymentMethods = paymentMethods;
    }

    public Map<String, Object> getProfileInfo() {
        return profileInfo;
    }

    public void setProfileInfo(Map<String, Object> profileInfo) {
        this.profileInfo = profileInfo;
    }
    
    public double getAmountDue() {
		return amountDue;
	}

	public void setAmountDue(double amountDue) {
		this.amountDue = amountDue;
	}

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", age=" + age +
                ", address=" + address +
                ", paymentMethods=" + paymentMethods +
                ", profileInfo=" + profileInfo +
                ", amountDue=" + amountDue +
                '}';
    }

	
}