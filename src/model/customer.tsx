import React, { Component } from "react";
import Beneficiary from "./beneficiary";

export default class Customer {
  //Fields
  authUserName = "";
  firstName = "";
  lastName = "";
  emailAddress = "";
  phoneNumber = "";
  beneficiariesByUsername: Beneficiary[] | undefined;
  s3ArchivePath = "";

  constructor(
    authUserName: string,
    emailAddress: string,
    firstName?: string,
    lastName?: string,
    phoneNumber?: string,
    beneficiariesByUsername?: Beneficiary[],
    s3ArchivePath?: string,
    ) {
    this.authUserName = authUserName;
    this.emailAddress = emailAddress; 
    if(firstName) this.firstName = firstName;
    if(lastName) this.lastName = lastName;
    if(phoneNumber) this.phoneNumber = phoneNumber;
    if(beneficiariesByUsername) this.beneficiariesByUsername = beneficiariesByUsername;
    if(s3ArchivePath) this.s3ArchivePath = s3ArchivePath;
  }
}
