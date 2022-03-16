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
      customerID
      customerUserName
      createdAt
      updatedAt
      customerBeneficiariesByIDId
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
      customerID
      customerUserName
      createdAt
      updatedAt
      customerBeneficiariesByIDId
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
      customerID
      customerUserName
      createdAt
      updatedAt
      customerBeneficiariesByIDId
      customerBeneficiariesByUsernameId
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
