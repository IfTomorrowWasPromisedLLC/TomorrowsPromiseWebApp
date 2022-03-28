import { throws } from "assert";
import { Auth } from "aws-amplify";
import React, { Component } from "react";
import AuthData from "../../model/authdata";
import Customer from "../../model/customer";
import {
  getCurrentAuthenticatedUser,
  authSubject,
} from "../../services/auth/auth.service";

export default class AccountForm extends Component{
  userMessage = {
    auth: new AuthData("","",""),
    customer: new Customer,
  }
  //authdata
  email: String = "";
  firstName: String = "";
  lastName: String = "";

  constructor(props: any) {
    super(props);
    authSubject.subscribe((value) => {
      this.userMessage = value;
      // console.log(this.userMessage.auth.attributes)
    });
    this.email = this.userMessage.auth.attributes ? this.userMessage.auth.attributes.email : "";
  }

  async componentDidMount() {
  }

  render() {
    let loading = true;
    if (this.userMessage.auth.attributes.email) {
      loading = false;
    }

    return (
      <div>
        AccountForm 
        {this.email}
      </div>
    );
  }
}

// const [accountFormState: any, setAccountFormState: any] = useState({
//   firstName: "",
//   lastName: "",
//   emailAddress: "",
//   phoneNumber: "",
//   address: "",
// });

// setAccountFormState({
//   firstName: userMessage.authData.attributes.firstname
//     ? userMessage.authData.attributes.firstname
//     : "",
//   lastName: userMessage.authData.attributes.lastname
//     ? userMessage.authData.attributes.lastname
//     : "",
//   emailAddress: userMessage.authData.attributes.email
//     ? userMessage.authData.attributes
//     : "",
//   phoneNumber: userMessage.authData.attributes.phone
//     ? userMessage.authData.attributes.phone
//     : "",
//   address: userMessage.authData.attributes.address
//     ? userMessage.authData.attributes.addresss
//     : "",
// });
