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
  Test,
} from "../../graphql/queries";
import { authSubject } from "../../services/auth/auth.service";
import AuthData from "../../model/authdata";
import Customer from "../../model/customer";
import Beneficiary from "../../model/beneficiary";
import { getCustomerWithBeneficiaries } from "../../model/customQueries";
import { timeStamp } from "console";

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
  const [fieldToUpdate, setFieldToUpdate] = useState<string>();
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
      if (
        userMessage.customer.beneficiaries &&
        userMessage.customer.beneficiaries.length > 0
      ) {
        //assuming they already have beneficiaries if not null
        setBeneficiaries(userMessage.customer.beneficiaries);
        console.log(
          "beneficiaries already in authsubject",
          userMessage.customer.beneficiaries[0],
          beneficiaries
        );
        return;
      }
      //TODO: Add query to handle any errors. Probably a manual fetch with CustomerID (shouldn't be necessary though)
      //
      console.log("beneficiaries were NOT in auth subject", beneficiaries);
    } catch (e) {
      console.log("error fetching beneficiaries:", e);
    }
  };

  //move to beneficiaries service section (microservice)
  //solved beneficiary problem. Make customer first, make beneficiary with customerID passed in.
  //need to fetch customer again to update. Can likely be ignored until a page reload
  const addBeneficiary = async () => {
    try {
      if (
        !formState.firstName ||
        !formState.lastName ||
        !formState.emailAddress
      )
        return;

      const newBeneficiary = {
        firstName: formState.firstName,
        lastName: formState.lastName,
        emailAddress: formState.emailAddress,
        status: formState.status,
        customerID: userMessage.customer.id,
        phoneNumber: formState.phoneNumber,
        notes: formState.notes,
      };
      console.log(userMessage.customer);
      console.log("new bene", { ...newBeneficiary });
      await API.graphql(
        graphqlOperation(createBeneficiary, { input: { ...newBeneficiary } })
      );
      setBeneficiaries([
        ...beneficiaries,
        new Beneficiary(
          newBeneficiary.firstName,
          newBeneficiary.lastName,
          newBeneficiary.emailAddress,
          newBeneficiary.status,
          newBeneficiary.customerID,
          newBeneficiary.phoneNumber,
          newBeneficiary.notes
        ),
      ]);
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

  const removeBeneficiary = async (beneficiary: Beneficiary) => {
    console.log(beneficiary.id);
    await API.graphql(
      graphqlOperation(deleteBeneficiary, {
        input: {
          id: beneficiary.id,
        },
      })
    );
  };
  //TODO: POTENTIALLY add a list tracking additions and removals

  const handleRemoveFields = (
    index: number
  ) => {
    try {
      const values = [...beneficiaries];
      const removedBeneficiary = values.splice(index, 1)[0];
      setBeneficiaries(values);
      console.log(removedBeneficiary);
      //TODO: Add functionality to remove beneficiaries from database after submitting
      removeBeneficiary(removedBeneficiary);
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdateBeneficiary = (benficiary: Beneficiary) => {
    
    //need to route to a new page just displaying that data for the field to update (ex. check out google updating)
  };
  const setInput = (key: string, value: string) => {
    setFormState({ ...formState, [key]: value });
  };

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
              {beneficiaries.map((row, index) => (
                <TableRow key={row?.phoneNumber}>
                  <TableCell component="th" scope="row">
                    {row?.firstName}
                  </TableCell>
                  <TableCell>{row?.lastName}</TableCell>
                  <TableCell align="right">{row?.emailAddress}</TableCell>
                  <TableCell>{row?.phoneNumber}</TableCell>
                  <button onClick={() => handleUpdateBeneficiary(row)}>Update Beneficiary Data</button>
                  <button onClick={() => handleRemoveFields(index)}>
                    Remove Beneficiary
                  </button>
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

Beneficiaries.propTypes = {};

Beneficiaries.defaultProps = {};

export default Beneficiaries;
