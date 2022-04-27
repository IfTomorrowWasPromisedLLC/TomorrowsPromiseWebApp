import React, { useState, Fragment } from "react";
import styled from "styled-components";
import { API, graphqlOperation } from "aws-amplify";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  createBeneficiary,
  updateBeneficiary,
  deleteBeneficiary,
} from "../../graphql/mutations";
import {
  customerByEmail,
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
 

export const Beneficiaries = () => {
  var userMessage = {
    auth: new AuthData("", "", ""),
    customer: new Customer(),
  };
    authSubject.subscribe((value) => {
    userMessage = value;
  });
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([]);
  const [formState, setFormState] = useState<{[key: string]: string}>({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    status: "UNCONFIRMED",
    notes: "",
    customerUserName: "",
  });

  const fetchBeneficiaries = async() => {
    try{
      const beneficiariesData: any = await API.graphql({
        query: customerByEmail,
        variables: {
          emailAddress: userMessage 
        },
      });
      const beneficiaries = beneficiariesData.data.customerByEmail.items.beneficiariesByUsername;
      setBeneficiaries(beneficiaries);
      console.log(beneficiaries);
    } catch (e) {
      console.log("error fetching beneficiaries:", e);
    }
  };

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
        formState.phoneNumber,
        formState.status,
        formState.notes,
        formState.customerUserName
      );

      setBeneficiaries([...beneficiaries, newBeneficiary]);
      setFormState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "", 
        status: "UNCONFIRMED",
        customerID: "",
        customerUserName: "",
      });

      await API.graphql(
        graphqlOperation(createBeneficiary, { input: newBeneficiary })
      );
    } catch (e) {
      console.log("error creating beneficiary:", e);
    }
  };

  const handleRemoveFields = (index: number) => {
    const values = [...beneficiaries];
    const removedBeneficiary = values.splice(index, 1);
    setBeneficiaries(values);
    console.log(removedBeneficiary);
  };

  const handleChange = (key:string, value: string) => {
    setFormState({ ...formState, [key]: value });
    // const values = [...beneficiaries];
    // values[index][event.target.name] = event.target.value;
    // console.log(beneficiaries[0]);
    // setBeneficiaries(values);
  };

  const handleSubmit = (event: any) => {
    alert(JSON.stringify(beneficiaries, null, 1));
  };

  return (
      <div className="home">
        <div className="home__table">
          <TableContainer >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>FirstName</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell align="right">
                    Email Address
                  </TableCell>
                  <TableCell align="center">Phone Number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {beneficiaries.map((row) => (
                  <TableRow>
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
        </div>
        <div className="app__input">
          <input
            onChange={(event) => handleChange("firstName", event.target.value)}
            value={formState.firstName}
            placeholder="First Name"
          />
          <input
            onChange={(event) => handleChange("lastName", event.target.value)}
            value={formState.lastName}
            placeholder="Last Name"
          />
          <input
            onChange={(event) =>
              handleChange("emailAddress", event.target.value)
            }
            value={formState.emailAddress}
            placeholder="Email Address"
          />
          <input
            onChange={(event) => handleChange("phoneNumber", event.target.value)}
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
