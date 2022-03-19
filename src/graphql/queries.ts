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
      customerUserName
      createdAt
      updatedAt
      customerBeneficiariesByUsernameId
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
        customerUserName
        createdAt
        updatedAt
        customerBeneficiariesByUsernameId
      }
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      UserName
      firstName
      lastName
      emailAddress
      phoneNumber
      s3ArchiveName
      beneficiariesByUsername {
        items {
          id
          firstName
          lastName
          emailAddress
          phoneNumber
          status
          notes
          customerUserName
          createdAt
          updatedAt
          customerBeneficiariesByUsernameId
        }
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
        UserName
        firstName
        lastName
        emailAddress
        phoneNumber
        s3ArchiveName
        beneficiariesByUsername {
          nextToken
        }
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
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerByEmail(
      emailAddress: $emailAddress
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        UserName
        firstName
        lastName
        emailAddress
        phoneNumber
        s3ArchiveName
        beneficiariesByUsername {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
