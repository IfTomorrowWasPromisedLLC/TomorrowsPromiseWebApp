export const Test = `query MyQuery {
    getCustomer(id: "b18b4af6-c52f-49d0-9a1e-02ac0efee674") {
      beneficiaries {
        nextToken
        items {
          emailAddress
          firstName
          lastName
          status
          notes
          id
          customerID
        }
      }
    }
  }
  `