import React, { useState } from "react";
import { BehaviorSubject, lastValueFrom } from "rxjs";
import Amplify, { API, Auth, graphqlOperation } from "aws-amplify";
import { createCustomer } from "../../graphql/mutations";
import { customerByEmail } from "../../graphql/queries";

export interface User {
  authData: any;
  customerData: any;
}

export const authSubject = new BehaviorSubject<User>({
  authData: "",
  customerData: "",
});

export const MakeCustomer = async () => {
  console.log("making customer");
  const [customer, setCustomer] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
  });

  try{
    var userMessage: User = {
      authData: "",
      customerData: "",
    }
   
    authSubject.subscribe((value) => userMessage = value);
    console.log("subject user data from make", userMessage);   

    setCustomer({
      userName: userMessage.authData.attributes.sub,
      firstName: userMessage.authData.attributes.firstname ? userMessage.authData.attributes.firstname : '',
      lastName: userMessage.authData.attributes.lastname ? userMessage.authData.attributes.lastname : '' ,
      emailAddress: userMessage.authData.attributes.email,
      phoneNumber: userMessage.authData.attributes.phone ? userMessage.authData.attributes.phone: '',
    });
    await API.graphql(graphqlOperation(createCustomer, {input: customer}));

  } catch(e){
    console.log("error creating customer", e);
  }
}

export const fetchCustomer = async () => {
  try {
    var userMessage: User = {
      authData: "",
      customerData: "",
    }
    authSubject.subscribe((value) => userMessage = value);
    console.log("subject user data from fetch", userMessage);

    const customerData = await API.graphql({
      query: customerByEmail,
      variables: {
        emailAddress: userMessage,
      },
    });
    //if customer exists we pass the data to our behaviour subject, if not we create the customer
    if (!customerData) return MakeCustomer;
    authSubject.next({
      authData: userMessage.authData,
      customerData: customerData,
    });

  } catch (e) {
    console.log("error fetching customer:", e);
  }
}

export const getCurrentAuthenticatedUser = async () => {
   const user = await Auth.currentAuthenticatedUser()
    .then((user) => {
      authSubject.next({
        authData: user,
        customerData: "",
      });
    })
    .catch((e) => {
      console.log("error in auth service", e);
    });
};
