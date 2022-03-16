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
      customerUserName
      createdAt
      updatedAt
      customerBeneficiariesByIDId
      customerBeneficiariesByUsernameId
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
      customerUserName
      createdAt
      updatedAt
      customerBeneficiariesByIDId
      customerBeneficiariesByUsernameId
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
      customerUserName
      createdAt
      updatedAt
      customerBeneficiariesByIDId
      customerBeneficiariesByUsernameId
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
      UserName
      firstName
      lastName
      emailAddress
      phoneNumber
      s3ArchiveName
      beneficiariesByID {
        items {
          id
          firstName
          lastName
          emailAddress
          phoneNumber
          status
          notes
          customerID
          customerUserName
          createdAt
          updatedAt
          customerBeneficiariesByIDId
          customerBeneficiariesByUsernameId
        }
        nextToken
      }
      beneficiariesByUsername {
        items {
          id
          firstName
          lastName
          emailAddress
          phoneNumber
          status
          notes
          customerID
          customerUserName
          createdAt
          updatedAt
          customerBeneficiariesByIDId
          customerBeneficiariesByUsernameId
        }
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
      UserName
      firstName
      lastName
      emailAddress
      phoneNumber
      s3ArchiveName
      beneficiariesByID {
        items {
          id
          firstName
          lastName
          emailAddress
          phoneNumber
          status
          notes
          customerID
          customerUserName
          createdAt
          updatedAt
          customerBeneficiariesByIDId
          customerBeneficiariesByUsernameId
        }
        nextToken
      }
      beneficiariesByUsername {
        items {
          id
          firstName
          lastName
          emailAddress
          phoneNumber
          status
          notes
          customerID
          customerUserName
          createdAt
          updatedAt
          customerBeneficiariesByIDId
          customerBeneficiariesByUsernameId
        }
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
      UserName
      firstName
      lastName
      emailAddress
      phoneNumber
      s3ArchiveName
      beneficiariesByID {
        items {
          id
          firstName
          lastName
          emailAddress
          phoneNumber
          status
          notes
          customerID
          customerUserName
          createdAt
          updatedAt
          customerBeneficiariesByIDId
          customerBeneficiariesByUsernameId
        }
        nextToken
      }
      beneficiariesByUsername {
        items {
          id
          firstName
          lastName
          emailAddress
          phoneNumber
          status
          notes
          customerID
          customerUserName
          createdAt
          updatedAt
          customerBeneficiariesByIDId
          customerBeneficiariesByUsernameId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
