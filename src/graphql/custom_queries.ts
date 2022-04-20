/*GraphQL*/
export const getBeneficiaryByCustomerEmail = `
query beneficiaryByCustomerEmail($EmailAddress: String!) {
    CustomerByEmail(emailAddress: $EmailAddress!) {
        beneficiaries {
            id
            firstName
            lastName
            emailAddress
            phoneNumber
            notes
        }
    }
    
}
`;