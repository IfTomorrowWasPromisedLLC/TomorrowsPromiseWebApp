import React from "react";
import Amplify from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../../aws-exports";
import styled from "styled-components";
import MakeCustomer from "../../services/auth/auth.service"

Amplify.configure(awsExports);

const AuthWrapper = styled.div``;
const ButtonContainer = styled.div``;
const Button = styled.button``;

function Auth() {
  return(
    <Authenticator socialProviders={["amazon", "facebook", "google"]}>
      {({ signOut, user}) => (
        <AuthWrapper>
          <h1>Hello {user.attributes.email}</h1>
          <ButtonContainer>
            <Button onClick={signOut}>Sign Out</Button>
          </ButtonContainer>
          </AuthWrapper>
      )}
    </Authenticator>
  );
}

export default Auth;
