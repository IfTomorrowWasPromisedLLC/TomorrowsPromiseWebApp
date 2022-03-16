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
      customerID
      customerUserName
      createdAt
      updatedAt
      customerBeneficiariesByIDId
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
        customerID
        customerUserName
        createdAt
        updatedAt
        customerBeneficiariesByIDId
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
        beneficiariesByID {
          nextToken
        }
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
export const customerByUserName = /* GraphQL */ `
  query CustomerByUserName(
    $UserName: String!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerByUserName(
      UserName: $UserName
      id: $id
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
        beneficiariesByID {
          nextToken
        }
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
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerByEmail(
      emailAddress: $emailAddress
      id: $id
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
        beneficiariesByID {
          nextToken
        }
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
