import React, { useState } from 'react';
import styled from "styled-components";
import { Authenticator } from "@aws-amplify/ui-react";
import awsExports from "../aws-exports";
import Amplify from "aws-amplify";
import AccountForm from "../components/AccountForm/AccountForm";
import FileUpload from "../components/FileUpload/FileUpload";
import Beneficiaries from "../components/Beneficiaries/Beneficiaries";

Amplify.configure(awsExports);

const AccountContainer = styled.div`
  width: 100%;
  height: 800px;
  .hello{
    padding-left: 4px;
  }
  #auth-btn{
    width: 50%;
    padding: 20px;
    background-color: #2E428B;
    border-radius: 10px;
    border-width: 1px;
    border-color: whitesmoke;
    :hover{
      background-color: whitesmoke;
      border-color: #2E428B;
      cursor: pointer;
    }
  }
`;
const AuthWrap = styled.div`
  padding-top: 20px;
`;
const BeneficiariesWrap = styled.div``;
const FileWrap = styled.div``;
const SubscriptionWrap = styled.div``;
const Button = styled.button`
  :hover{
    cursor:pointer;
  }
`;
 
const Account = () => {
  const [showHideAccountDetails, setShowHideAccountDetails] = useState(false);
  
  return (
    <AccountContainer>
      <AuthWrap>
        <Authenticator socialProviders={["amazon", "facebook", "google"]}>
          {({ signOut, user }) => (
            <main>
              <h1 className="hello">Hello {user.attributes.email}</h1>
              <Button onClick={() => setShowHideAccountDetails(!showHideAccountDetails)}>Account Details</Button>
              {showHideAccountDetails && <AccountForm/>}
              <BeneficiariesWrap>
                <Beneficiaries />
              </BeneficiariesWrap>
              <FileWrap></FileWrap>
              <SubscriptionWrap></SubscriptionWrap>
              <FileUpload />
              <Button id="auth-btn" onClick={signOut}>Sign out</Button>
            </main>
          )}
        </Authenticator>
      </AuthWrap>
    </AccountContainer>
    //   Need a beneficiaries page
    // Need to display subscription data
    // Need file upload/download to archive
  );
};

export default Account;
