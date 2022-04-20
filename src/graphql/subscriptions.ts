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
      customerUserName
      createdAt
      updatedAt
      customerBeneficiariesByUsernameId
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
      customerUserName
      createdAt
      updatedAt
      customerBeneficiariesByUsernameId
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
      customerUserName
      createdAt
      updatedAt
      customerBeneficiariesByUsernameId
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
      id
      AuthUserName
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
      id
      AuthUserName
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
      id
      AuthUserName
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
