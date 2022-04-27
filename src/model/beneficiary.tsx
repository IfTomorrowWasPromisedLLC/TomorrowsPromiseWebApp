import React, { Component } from "react";

export default class Beneficiary {
  //Fields
  firstName = "";
  lastName = "";
  emailAddress = "";
  phoneNumber = "";
  status = "UNCONFIRMED";
  notes = "";
  customerUserName = "";

  constructor(
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber: string,
    status: string,
    notes: string,
    customerUserName: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.phoneNumber = phoneNumber ? phoneNumber : "";
    this.status = status;
    this.notes = notes ? notes : "";
    this.customerUserName = customerUserName;
  }
}
