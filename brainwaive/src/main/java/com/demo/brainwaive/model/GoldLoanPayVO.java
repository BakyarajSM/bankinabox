package com.demo.brainwaive.model;

public class GoldLoanPayVO {
	private String loanType;
	private long loanNumber;
	private String customerName;
	private double amountDue;
	
	public String getLoanType() {
		return loanType;
	}
	public void setLoanType(String loanType) {
		this.loanType = loanType;
	}
	public long getLoanNumber() {
		return loanNumber;
	}
	public void setLoanNumber(long loanNumber) {
		this.loanNumber = loanNumber;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public double getAmountDue() {
		return amountDue;
	}
	public void setAmountDue(double amountDue) {
		this.amountDue = amountDue;
	}
	@Override
	public String toString() {
		return "GoldLoanPayVO [loanType=" + loanType + ", loanNumber=" + loanNumber + ", customerName=" + customerName
				+ ", amountDue=" + amountDue + "]";
	}
	
	

}
