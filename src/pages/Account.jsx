import React from "react";
import styled from "styled-components";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-exports";
import Amplify from "aws-amplify";
import AccountForm from "../components/AccountForm/AccountForm";
import FileUpload from "../components/FileUpload/FileUpload";

Amplify.configure(awsExports);

const AccountContainer = styled.div`
  background-color: green;
  width: 100%;
  height: 800px;
  padding-top: 40px;
`;
const AuthWrap = styled.div`
  background-color: purple;
`;
const BeneficiariesWrap = styled.div``;
const FileWrap = styled.div``;
const SubscriptionWrap = styled.div``;

const Account = () => {
  return (
    <AccountContainer>
      <AuthWrap>
        <Authenticator socialProviders={["amazon", "facebook", "google"]}>
          {({ signOut, user }) => (
            <main>
              <h1>Hello {user.attributes.email}</h1>
              <AccountForm></AccountForm>
              <BeneficiariesWrap></BeneficiariesWrap>
              <FileWrap></FileWrap>
              <SubscriptionWrap></SubscriptionWrap>
              <FileUpload />
              <button onClick={signOut}>Sign out</button>
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
