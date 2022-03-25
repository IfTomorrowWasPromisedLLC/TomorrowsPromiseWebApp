import React, { Component } from 'react'
import { getCurrentAuthenticatedUser, User, authSubject } from '../../services/auth/auth.service'

export default class AccountForm extends Component {
  userMessage: User = {
    authData: undefined,
    customerData: undefined
  };
  
  constructor(props: any){
    super(props);
    authSubject.subscribe((value) => {
      this.userMessage = value;
    });
    this.state = {
      email: ""
    }
  }

  async componentDidMount() {
    await getCurrentAuthenticatedUser();
    console.log(this.userMessage.authData.attributes);
    this.setState({email: this.userMessage.authData.attributes.email});
  }
  render() {
    let loading = true;
    if (this.userMessage.authData) {
      loading = false;
    }

    const {
      email,
    } = this.state;

    return (
      <div>AccountForm
        {email}
      </div>
    )
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
