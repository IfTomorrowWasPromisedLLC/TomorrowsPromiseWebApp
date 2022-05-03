import React, { Component } from "react";
import Beneficiary from "./beneficiary";

export default class Customer {
  //Fields
  authUserName = "";
  firstName = "";
  lastName = "";
  emailAddress = "";
  phoneNumber = "";
  beneficiaries: Beneficiary[] | undefined;
  s3ArchivePath = "";
  id = "";
  constructor(
    authUserName: string,
    emailAddress: string,
    firstName?: string,
    lastName?: string,
    phoneNumber?: string,
    beneficiaries?: Beneficiary[],
    s3ArchivePath?: string,
    id?: string,
    ) {
    this.authUserName = authUserName;
    this.emailAddress = emailAddress; 
    if(firstName) this.firstName = firstName;
    if(lastName) this.lastName = lastName;
    if(phoneNumber) this.phoneNumber = phoneNumber;
    if(beneficiaries) this.beneficiaries = beneficiaries;
    if(s3ArchivePath) this.s3ArchivePath = s3ArchivePath;
    if(id) this.id = id;
  }
}
