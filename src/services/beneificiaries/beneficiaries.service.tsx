import { API, graphqlOperation } from 'aws-amplify';
import React from 'react'
import Beneficiary from "../../model/beneficiary";

export const addBeneficiary = () => {

}

export const deleteBeneficiary = async (beneficiaryToDelete: Beneficiary) => {
  await API.graphql(graphqlOperation(deleteBeneficiary, {input: beneficiaryToDelete}));
}

export const updateBeneficiary = () => {

}

export const fetchBeneficiaries = () => {

}
