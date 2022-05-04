export const getCustomerWithBeneficiaries = `
  query getCustomerByEmailWithBeneficiaries($emailAddress: String!) {
    customerByEmail(emailAddress: $emailAddress) {
      items {
        beneficiaries {
          items {
            firstName
            lastName
            emailAddress
            id
            notes
            phoneNumber
            status
          }
        }
        id
        emailAddress
        firstName
        lastName
        phoneNumber
        s3ArchiveName
      }
    }
  }
`;
