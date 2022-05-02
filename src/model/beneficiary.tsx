import React, { Component } from "react";

export default class Beneficiary {
  //Fields
   lastName = "";
   emailAddress = "";
   firstName = "";
   phoneNumber = "";
   status = "UNCONFIRMED";
   notes = "";
   customerID = "";
   id = "";

  constructor(
    firstName: string,
    lastName: string,
    emailAddress: string,
    status: string,
    customerID: string,
    phoneNumber?: string,
    notes?: string,
    id?: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.status = status;
    this.customerID = customerID;
    if(phoneNumber) this.phoneNumber = phoneNumber;
    if(notes) this.notes = notes;
    if(id) this.id = id;
  }
}
