import React, { useState } from "react";
import { BehaviorSubject, lastValueFrom } from "rxjs";
import Amplify, { API, Auth, graphqlOperation } from "aws-amplify";
// import { createCustomer } from "../../graphql/mutations";
// import { customerByEmail } from "../../graphql/queries";
import AuthData from "../../model/authdata";
import Customer from "../../model/customer";


export const authSubject = new BehaviorSubject<{auth: AuthData, customer: Customer}>({
  auth: new AuthData('','',''),
  customer: new Customer,
});

export const MakeCustomer = async () => {
  console.log("making customer");
  const [customer, setCustomer] = useState({
    userName: '',
    sub: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
  });

  try{
    var userMessage = {
      auth: new AuthData("","",""),
      customer: new Customer,
    }
   
    authSubject.subscribe((value) => userMessage = value);
    console.log("subject user data from make", userMessage);   

    setCustomer({
      userName: userMessage.auth.username ? userMessage.auth.username : '',
      sub: userMessage.auth.attributes.sub ? userMessage.auth.attributes.sub : '',
      firstName: userMessage.auth.attributes.given_name ? userMessage.auth.attributes.given_name : '',
      lastName: userMessage.auth.attributes.family_name ? userMessage.auth.attributes.family_name : '' ,
      emailAddress: userMessage.auth.attributes.email ? userMessage.auth.attributes.email : '',
      phoneNumber: userMessage.auth.attributes.phone_number ? userMessage.auth.attributes.phone_number: '',
    });
    // await API.graphql(graphqlOperation(createCustomer, {input: customer}));

  } catch(e){
    console.log("error creating customer", e);
  }
}

export const fetchCustomer = async () => {
  try {
    var userMessage = {
      auth: new AuthData("","",""),
      customer: new Customer,
    }
    authSubject.subscribe((value) => userMessage = value);
    console.log("subject user data from fetch", userMessage);

    // const customerData = await API.graphql({
    //   query: customerByEmail,
    //   variables: {
    //     emailAddress: userMessage,
    //   },
    // });

    //if customer exists we pass the data to our behaviour subject, if not we create the customer
    if (!userMessage.customer) return MakeCustomer;
    authSubject.next({
      auth: userMessage.auth,
      customer: userMessage.customer,
    });

  } catch (e) {
    console.log("error fetching customer:", e);
  }
}

export const getCurrentAuthenticatedUser = async () => {
  var userMessage = {
    auth: new AuthData("","",""),
    customer: new Customer,
  }
   const user = await Auth.currentAuthenticatedUser()
    .then((user) => {
      authSubject.next({
        auth: new AuthData(user.attributes.username, user.attributes.email, user.attributes.sub),
        customer: userMessage.customer ? userMessage.customer : new Customer,
      });
    })
    .catch((e) => {
      console.log("error in auth service", e);
    });
};
