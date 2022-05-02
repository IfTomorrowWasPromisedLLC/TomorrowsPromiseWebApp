/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBeneficiary = /* GraphQL */ `
  subscription OnCreateBeneficiary {
    onCreateBeneficiary {
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
export const onUpdateBeneficiary = /* GraphQL */ `
  subscription OnUpdateBeneficiary {
    onUpdateBeneficiary {
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
export const onDeleteBeneficiary = /* GraphQL */ `
  subscription OnDeleteBeneficiary {
    onDeleteBeneficiary {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
