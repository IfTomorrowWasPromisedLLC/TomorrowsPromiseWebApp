import React from "react";
import { BehaviorSubject } from 'rxjs';
import Amplify, { Auth } from "aws-amplify";

export const authSubject = new BehaviorSubject(0);

export const getCurrentAuthenticatedUser = async () => {
  Auth.currentAuthenticatedUser().then((user) => {
    authSubject.next(user.attributes)
  })
  .catch((e) => {
    this.setState({ authState: "signIn" });
  });;
}
