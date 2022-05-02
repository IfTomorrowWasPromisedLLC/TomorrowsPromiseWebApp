/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBeneficiary = /* GraphQL */ `
  query GetBeneficiary($id: ID!) {
    getBeneficiary(id: $id) {
      id
      firstName
      lastName
      emailAddress
      phoneNumber
      status
      notes
      CustomerID
      createdAt
      updatedAt
    }
  }
`;
export const listBeneficiaries = /* GraphQL */ `
  query ListBeneficiaries(
    $filter: ModelBeneficiaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBeneficiaries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        emailAddress
        phoneNumber
        status
        notes
        CustomerID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        authUserName
        firstName
        lastName
        emailAddress
        phoneNumber
        s3ArchiveName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const customerByEmail = /* GraphQL */ `
  query CustomerByEmail(
    $emailAddress: String!
    $lastName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerByEmail(
      emailAddress: $emailAddress
      lastName: $lastName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        authUserName
        firstName
        lastName
        emailAddress
        phoneNumber
        s3ArchiveName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
