import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API, graphqlOperation } from "aws-amplify";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  createBeneficiary,
  updateBeneficiary,
  deleteBeneficiary,
  updateCustomer,
} from "../../graphql/mutations";
import {
  customerByEmail,
  getBeneficiary,
  getCustomer,
} from "../../graphql/queries";
import { authSubject } from "../../services/auth/auth.service";
import AuthData from "../../model/authdata";
import Customer from "../../model/customer";
import Beneficiary from "../../model/beneficiary";

const BeneficiariesFormContainer = styled.div``;
const StyledForm = styled.form``;
const styledFormRow = styled.div``;
const styledInputWrapper = styled.div``;
const ButtonContainer = styled.div``;
const Button = styled.button``;
const TableWrapper = styled.div`
  width: 90%;
`;

export const Beneficiaries = () => {
  var userMessage = {
    auth: new AuthData("", "", ""),
    customer: new Customer("", "", "", "", "", [], ""),
  };
  authSubject.subscribe((value) => {
    userMessage = value;
  });

  useEffect(() => {
    fetchBeneficiaries();
  }, []);

  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([]);
  const [formState, setFormState] = useState<{ [key: string]: string }>({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    status: "UNCONFIRMED",
    notes: "",
    customerUserName: userMessage.auth.attributes.email,
  });

  const fetchBeneficiaries = async () => {
    try {
      if (userMessage.customer.beneficiariesByUsername) {
        //assuming they already have beneficiaries if not null
        setBeneficiaries(userMessage.customer.beneficiariesByUsername);
        console.log("beneficiaries already in authsubject", beneficiaries);
        return;
      }
      const beneficiariesData: any = await API.graphql({
        query: customerByEmail,
        variables: {
          emailAddress: userMessage.auth.attributes.email,
        },
      });
      console.log(beneficiariesData);
      const beneficiariesList =
        beneficiariesData.data.customerByEmail.beneficiariesByUsername.items;
      setBeneficiaries(beneficiariesList);
      console.log("fetched beneficiaries from db", beneficiaries);
    } catch (e) {
      console.log("error fetching beneficiaries:", e);
    }
  };

  //move to beneficiaries service section (microservice)
  const addBeneficiary = async () => {
    try {
      if (
        !formState.firstName ||
        !formState.lastName ||
        !formState.emailAddress
      )
        return;

      const newBeneficiary = new Beneficiary(
        formState.firstName,
        formState.lastName,
        formState.emailAddress,
        formState.status,
        userMessage.customer.id,
        formState.phoneNumber,
        formState.notes,        
      );
      console.log({ ...newBeneficiary });
      await API.graphql(
        graphqlOperation(createBeneficiary, { input: { ...formState } })
      );
      // await API.graphql(
      //   graphqlOperation(updateCustomer, {
      //     input: {
      //       id: userMessage.customer.id,
      //       beneficiaries: {
      //         customerEmail: userMessage.auth.attributes.email,
      //       }
      //     },
      //   })
      // );
      setBeneficiaries([...beneficiaries, newBeneficiary]);
      setFormState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        status: "UNCONFIRMED",
        customerUserName: userMessage.auth.attributes.email,
      });
    } catch (e) {
      console.log("error creating beneficiary:", e);
    }
  };

  const removeBeneficiary = async (beneficiaryToDelete: Beneficiary) => {
    await API.graphql(
      graphqlOperation(deleteBeneficiary, { input: beneficiaryToDelete.id })
    );
  };

  const handleRemoveFields = (index: number) => {
    const values = [...beneficiaries];
    const removedBeneficiary = values.splice(index, 1)[0];
    setBeneficiaries(values);
    console.log(removedBeneficiary);
    //TODO: Add functionality to remove beneficiaries from database after submitting
    removeBeneficiary(removedBeneficiary);
  };

  const setInput = async (key: string, value: string) => {
    setFormState({ ...formState, [key]: value });
  };

  const handleSubmit = (event: any) => {
    alert(JSON.stringify(beneficiaries, null, 1));
  };

  let property: keyof typeof Beneficiary;

  return (
    <div className="home">
      <TableWrapper className="home__table">
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>FirstName</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell align="right">Email Address</TableCell>
                <TableCell align="center">Phone Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {beneficiaries.map((row) => (
                <TableRow key={row?.phoneNumber}>
                  <TableCell component="th" scope="row">
                    {row?.firstName}
                  </TableCell>
                  <TableCell>{row?.lastName}</TableCell>
                  <TableCell align="right">{row?.emailAddress}</TableCell>
                  <TableCell>{row?.phoneNumber}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableWrapper>
      <div className="app__input">
        <input
          onChange={(event) => setInput("firstName", event.target.value)}
          value={formState.firstName}
          placeholder="First Name"
        />
        <input
          onChange={(event) => setInput("lastName", event.target.value)}
          value={formState.lastName}
          placeholder="Last Name"
        />
        <input
          onChange={(event) => setInput("emailAddress", event.target.value)}
          value={formState.emailAddress}
          placeholder="Email Address"
        />
        <input
          onChange={(event) => setInput("phoneNumber", event.target.value)}
          value={formState.phoneNumber}
          placeholder="Phone Number"
        />
        <button onClick={addBeneficiary}>Add a Beneficiary</button>
      </div>
    </div>
  );
};

// <BeneficiariesFormContainer data-testid="Beneficiaries">
//   Add Beneficiaries
//   <StyledForm onSubmit={handleSubmit}>
//       {beneficiaries.map((inputField, index) => (
//           <Fragment>
//           <div>
//           <label htmlFor='firstName'>First Name</label>
//             <input key={index}
//               type='text'
//               className='form-control'
//               id='firstName'
//               name='firstName'
//               value={inputField.firstName}
//               onChange={(event) => handleChange(index, event)} />
//           </div>
//           <div>
//           <label htmlFor='lastName'>Last Name</label>
//             <input key={index}
//              type='text'
//              className='form-control'
//              id='lastName'
//              name='lastName'
//              value={inputField.lastName}
//               onChange={(event) => handleChange(index, event)} />
//           </div>
//           <div>
//           <label htmlFor="emailAddress"> Email Address</label>
//           <input key={index}
//              type='text'
//              className='form-control'
//              id='emailAddress'
//              name='emailAddress'
//              value={inputField.email_address}
//               onChange={(event) => handleChange(index, event)} />
//           </div>
//           <div>
//           <label htmlFor="phoneNumber">Phone Number</label>
//           <input key={index}
//              type='text'
//              className='form-control'
//              id='phoneNumber'
//              name='phoneNumber'
//              value={inputField.phone_number}
//               onChange={(event) => handleChange(index, event)} />
//           </div>
//           <ButtonContainer>
//               <Button
//                 type="button"
//                 disabled={index === 0}
//                 onClick={() => handleRemoveFields(index)}
//               >
//                 -
//               </Button>
//               <Button
//                 type="button"
//                 onClick={() => handleAddFields(index)}
//               >
//                 +
//               </Button>
//             </ButtonContainer>
//             </Fragment>
//         )
//       )}
//       <ButtonContainer>
//         <Button id="submit-btn"
//           type = "submit"
//           onSubmit={handleSubmit}>
//             Save
//         </Button>
//         <Button
//           id="reset-btn"
//           type="reset"
//           onClick={handleFormReset}
//         >
//           Reset Form
//         </Button>
//       </ButtonContainer>
//   </StyledForm>
// </BeneficiariesFormContainer>
//       );
//     }

Beneficiaries.propTypes = {};

Beneficiaries.defaultProps = {};

export default Beneficiaries;
