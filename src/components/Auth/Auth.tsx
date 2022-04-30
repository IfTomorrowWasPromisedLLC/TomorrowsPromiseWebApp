import React from 'react'
import { Amplify, Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from "../../aws-exports"
import { authSubject, fetchCustomer, MakeCustomer } from '../../services/auth/auth.service';
import AuthData from '../../model/authdata';
import Customer from '../../model/customer';

Amplify.configure(awsExports);
  
const formFields = {
  signUp: {
    email: {
      order:1
    },
    family_name: {
      order: 2
    },
    preferred_username: {
      order: 4
    },
    birthdate: {
      order: 3
    },
    password: {
      order: 5
    },
    confirm_password: {
      order: 6
    }
  },
}

export default function AuthenticatorWithEmail() {
  var userMessage = {
    auth: new AuthData("", "", ""),
    customer: new Customer("", "", "", "", "", [], ""),
  };
  authSubject.subscribe((value) => {
    var userMessage = value;
  });
  
 

  const services = {
    async handleSignUp(formData: any) {
      let { username, password, attributes } = formData;
      // custom username
      username = username.toLowerCase();
      attributes.email = attributes.email.toLowerCase();
      await MakeCustomer({username, attributes});
      return Auth.signUp({
        username,
        password,
        attributes,
      });
    },
    
    async handleSignIn(formData: any){
      let {username, password, attributes } = formData;
      username = username.toLowerCase();
      attributes.email = attributes.email.toLowerCase();
      return Auth.signIn({
        username, password,});
    }
  };

  return (
    <Authenticator variation="modal">
      {({ signOut }) => <button onClick={signOut}>Sign out</button>}
    </Authenticator>
  );
}