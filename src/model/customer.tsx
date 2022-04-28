import React, { Component } from "react";
import Beneficiary from "./beneficiary";

export default class Customer {
  //Fields
  UserName = "";
  firstName = "";
  lastName = "";
  emailAddress = "";
  phoneNumber = "";
  beneficiariesByUsername: Beneficiary[];
  s3ArchivePath = "";

  constructor(
    UserName: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber: string,
    beneficiariesByUsername: Beneficiary[],
    s3ArchivePath: string,
    ) {
    this.UserName = UserName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.phoneNumber = phoneNumber ? phoneNumber : "";
    this.s3ArchivePath = s3ArchivePath ? s3ArchivePath : "";
    this.beneficiariesByUsername = beneficiariesByUsername ? beneficiariesByUsername : [];
  }
}
