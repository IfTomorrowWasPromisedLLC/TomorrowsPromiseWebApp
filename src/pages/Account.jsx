import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Authenticator } from "@aws-amplify/ui-react";
import AccountForm from "../components/AccountForm/AccountForm";
import FileUpload from "../components/FileUpload/FileUpload";
import Beneficiaries from "../components/Beneficiaries/Beneficiaries";
import Subscription from "../components/Subscription/Subscription";
import {
  authSubject,
  fetchCustomer,
  getCurrentAuthenticatedUser,
} from "../services/auth/auth.service";
import AuthData from "../model/authdata";
import Customer from "../model/customer";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsExports from "../aws-exports";
import { fetchBeneficiaries } from "../services/beneificiaries/beneficiaries.service";
Amplify.configure(awsExports);

const AccountContainer = styled.div`
  width: 100%;
  height: 800px;
  padding-left: 1rem;
  #auth-btn {
    width: 50%;
    padding: 20px;
    background-color: #2e428b;
    border-radius: 10px;
    border-width: 1px;
    border-color: whitesmoke;
    :hover {
      background-color: whitesmoke;
      border-color: #2e428b;
      cursor: pointer;
    }
  }
`;
const AccountHelloDiv = styled.div`
  padding-top: 1rem;
`;
const FileWrap = styled.div``;
const SubscriptionWrap = styled.div``;
const Button = styled.button`
  :hover {
    cursor: pointer;
  }
`;
const StyledSignOutButton = styled.button`
`;
const formFields = {
  signUp: {
    email: {
      order: 1,
    },
    family_name: {
      order: 2,
    },
    preferred_username: {
      order: 4,
    },
    birthdate: {
      order: 3,
    },
    password: {
      order: 5,
    },
    confirm_password: {
      order: 6,
    },
  },
};

var userMessage = {
  auth: new AuthData("", "", ""),
  customer: new Customer("", "", "", "", "", [], ""),
};

function Account({ signOut, user }) {
  // if (!isPassedToWithAuthenticator) {
  //   throw new Error(`isPassedToWithAuthenticator was not provided`);
  // }
  console.log("in account");

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      await getCurrentAuthenticatedUser(); // will handle our user message stuff
      console.log(userMessage.auth);
      await fetchCustomer();
    };
    // call the function
    fetchData().catch(console.error);
  }, []);

  //user is logged in if this FC is called

  //will make a new Customer in DB on sign-up, just need to fetch
  authSubject.subscribe((value) => {
    userMessage = value;
  });

  return (
    <>
      <AccountContainer>
        <AccountHelloDiv>
          <h1>
            Hello{" "}
            {user.attributes.given_name
              ? user.attributes.given_name
              : user.attributes.email}
          </h1>
          <AccountForm/>
          <Beneficiaries/>
          <Subscription/>
          <Button className="sign-out-button"onClick={signOut}>Sign out</Button>
        </AccountHelloDiv>
      </AccountContainer>
    </>
  );
}

export default withAuthenticator(Account, {
  socialProviders: ["google", "amazon", "facebook"],
  formFields: {
    signUp: {
      email: {
        isRequired: true,
        order: 1,
      },
      given_name: {
        placeholder: "First Name",
        isRequired: true,
        order: 2,
      },
      family_name: {
        placeholder: "Last Name",
        isRequired: true,
        order: 3,
      },
      password: {
        isRequired: true,
        order: 4,
      },
      confirm_password: {
        isRequired: true,
        order: 5,
      },
    },
  },
});

export async function getStaticProps() {
  return {
    props: {
      isPassedToWithAuthenticator: true,
    },
  };
}
