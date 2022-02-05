import React from "react";
import Amplify from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../../aws-exports";
Amplify.configure(awsExports);

function Auth() {
  return (
    <Authenticator socialProviders={["amazon", "facebook", "google"]}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.attributes.email}</h1>
          {console.log()}
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default Auth;
