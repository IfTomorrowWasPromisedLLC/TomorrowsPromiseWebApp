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
        customerID
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
        items {
          firstName
          lastName
          emailAddress
          phoneNumber
          status
          notes
          id
        }
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
export const Test = `query MyQuery {
  getCustomer(id: "b18b4af6-c52f-49d0-9a1e-02ac0efee674") {
    beneficiaries {
      nextToken
      items {
        emailAddress
        firstName
        id
        customerID
      }
    }
  }
}
`