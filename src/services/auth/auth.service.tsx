import React, { useState } from "react";
import { BehaviorSubject, lastValueFrom } from "rxjs";
import Amplify, { API, Auth, graphqlOperation } from "aws-amplify";
import AuthData from "../../model/authdata";
import Customer from "../../model/customer";
import Beneficiary from "../../model/beneficiary";
import { createCustomer } from "../../graphql/mutations";
import { customerByEmail } from "../../graphql/queries";
import { getCustomerWithBeneficiaries } from "../../model/customQueries";

export const authSubject = new BehaviorSubject<{
  auth: AuthData;
  customer: Customer;
}>({
  auth: new AuthData("", "", ""),
  customer: new Customer("", "", "", "", "", [], ""),
});

export const MakeCustomer = async (props: any) => {
  // turn into a post confirmation function in lambda
  try {
    console.log("making customer");
    var userMessage = {
      auth: new AuthData("", "", ""),
      customer: new Customer("", "", "", "", "", [], ""),
    };
    await authSubject.subscribe((value) => (userMessage = value));
    console.log("1", props.attributes);
    console.log("2", userMessage.auth.attributes);
    //need to figure out which customerToCreate version
    const customerToCreate = {
      authUserName: props.attributes.sub,
      firstName: props.attributes.given_name ? props.attributes.given_name : "",
      lastName: props.attributes.family_name
        ? props.attributes.family_name
        : "",
      emailAddress: props.attributes.email,
      //cutting out beneficiaries list and s3 archive - dont exist yet.
      //customer not in database yet = no beneficiaries yet //customer not in database yet = no archive yet
    };
    console.log(customerToCreate);
    await API.graphql(
      graphqlOperation(createCustomer, { input: customerToCreate })
    );
    console.log("moving to fetch after making customer");
    //customer made, back to fetch
    return new Customer(
      userMessage.auth.attributes.sub ? userMessage.auth.attributes.sub : "",
      userMessage.auth.attributes.given_name
        ? userMessage.auth.attributes.given_name
        : "",
      userMessage.auth.attributes.family_name
        ? userMessage.auth.attributes.family_name
        : "",

      userMessage.auth.attributes.email
        ? userMessage.auth.attributes.email
        : "",

      userMessage.auth.attributes.phone_number
        ? userMessage.auth.attributes.phone_number
        : "",
      [],
      ""
    );
  } catch (e) {
    console.log("error creating customer", e);
  }
};

export const fetchCustomer = async () => {
  var userMessage = {
    auth: new AuthData("", "", ""),
    customer: new Customer("", "", "", "", "", [], ""),
  };
  await authSubject.subscribe((value) => (userMessage = value));

  try {
    const fetchedCustomer: any = await API.graphql({
      query: getCustomerWithBeneficiaries,
      variables: {
        emailAddress: userMessage.auth.attributes.email,
      },
    });
    //if theres no fetchedCustomerData, customer doesn't exist, make the customer
    console.log(
      fetchedCustomer.data.customerByEmail.items.length,
      fetchedCustomer.data.customerByEmail.items.length === 0
    );
    //didn't find a customer with matching email - make a new customer
    if (fetchedCustomer.data.customerByEmail.items.length === 0) {
      console.log("fetch -> make");
      const customer = await MakeCustomer(userMessage.auth); //go make the customer
      console.log("final customer", customer);
      return customer;
    }

    const fetchedCustomerData = fetchedCustomer.data.customerByEmail.items[0];
    //customer did exist so we can update our message

    console.log("got customer", fetchedCustomerData.beneficiaries);
    authSubject.next({
      auth: userMessage.auth,
      customer: new Customer(
        fetchedCustomerData.authUserName,
        fetchedCustomerData.firstName,
        fetchedCustomerData.lastName,
        fetchedCustomerData.emailAddress,
        fetchedCustomerData.phoneNumber,
        fetchedCustomerData.beneficiaries.items,
        fetchedCustomerData.s3ArchivePath,
        fetchedCustomerData.id,
      ),
    });
  } catch (e) {
    console.log(
      "error fetching customer:",
      userMessage.auth.attributes.email,
      e
    );
  }
};

export const getCurrentAuthenticatedUser = async () => {
  var userMessage = {
    auth: new AuthData("", "", ""),
    customer: new Customer("", "", "", "", "", [], ""),
  };
  const user = await Auth.currentAuthenticatedUser()
    .then((user) => {
      authSubject.next({
        auth: new AuthData(
          user.attributes.username,
          user.attributes.email,
          user.attributes.sub,
          "",
          "",
          user.attributes.family_name ? user.attributes.family_name : "",
          user.attributes.gender ? user.attributes.gender : "",
          user.attributes.given_name ? user.attributes.given_name : "",
          "",
          user.attributes.middle_name ? user.attributes.middle_name : "",
          "",
          user.attributes.nickname ? user.attributes : "",
          user.attributes.phone_number ? user.attributes.phone_number : "",
          "",
          "",
          "",
          "",
          user.attributes.addres ? user.attributes.address : ""
        ),
        customer: userMessage.customer
          ? userMessage.customer
          : new Customer("", "", "", "", "", [], ""),
      });
    })
    .catch((e) => {
      console.log("error in auth service", e);
    });
};
