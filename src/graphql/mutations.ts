/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBeneficiary = /* GraphQL */ `
  mutation CreateBeneficiary(
    $input: CreateBeneficiaryInput!
    $condition: ModelBeneficiaryConditionInput
  ) {
    createBeneficiary(input: $input, condition: $condition) {
      id
      firstName
      lastName
      emailAddress
      phoneNumber
      status
      notes
      customerID
      createdAt
      updatedAt
    }
  }
`;
export const updateBeneficiary = /* GraphQL */ `
  mutation UpdateBeneficiary(
    $input: UpdateBeneficiaryInput!
    $condition: ModelBeneficiaryConditionInput
  ) {
    updateBeneficiary(input: $input, condition: $condition) {
      id
      firstName
      lastName
      emailAddress
      phoneNumber
      status
      notes
      customerID
      createdAt
      updatedAt
    }
  }
`;
export const deleteBeneficiary = /* GraphQL */ `
  mutation DeleteBeneficiary(
    $input: DeleteBeneficiaryInput!
    $condition: ModelBeneficiaryConditionInput
  ) {
    deleteBeneficiary(input: $input, condition: $condition) {
      id
      firstName
      lastName
      emailAddress
      phoneNumber
      status
      notes
      customerID
      createdAt
      updatedAt
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      authUserName
      firstName
      lastName
      emailAddress
      phoneNumber
      s3ArchiveName
      beneficiaries {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      authUserName
      firstName
      lastName
      emailAddress
      phoneNumber
      s3ArchiveName
      beneficiaries {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      authUserName
      firstName
      lastName
      emailAddress
      phoneNumber
      s3ArchiveName
      beneficiaries {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
