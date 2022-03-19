import React from "react";
import { BehaviorSubject, lastValueFrom } from "rxjs";
import Amplify, { API, Auth } from "aws-amplify";
import { createCustomer } from "../../graphql/mutations";
import { customerByEmail } from "../../graphql/queries";

export const fetchCustomer = async () => {
  try {
    const userMessage = authSubject.subscribe();
    console.log("subject user data ", userMessage);

    const customerData = await API.graphql({
      query: customerByEmail,
      variables: {
        emailAddress: userMessage,
      },
    });
    //if customer exists we pass the data to our behaviour subject, if not we create the customer
    customerData ? authSubject.next({
      authData: "",
      customerData: "",
    }) : createCustomer() ;
  } catch (e) {
    console.log("error fetching customer:", e);
  }
};

export interface User {
    authData: any;
    customerData: any;
}
export const authSubject = new BehaviorSubject<User>({
  authData: "",
  customerData: "",
});

export const getCurrentAuthenticatedUser = async () => {
  await Auth.currentAuthenticatedUser()
    .then((user) => {
      authSubject.next({
        authData: user,
        customerData: "temp"
      });
    })
    .catch((e) => {
      console.log("error in auth service", e);
    });
};
