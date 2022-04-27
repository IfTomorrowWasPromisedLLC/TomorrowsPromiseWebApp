/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBeneficiaryInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  emailAddress: string,
  phoneNumber?: string | null,
  status: string,
  notes?: string | null,
  customerUserName: string,
  customerBeneficiariesByUsernameId?: string | null,
};

export type ModelBeneficiaryConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  emailAddress?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  status?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  customerUserName?: ModelStringInput | null,
  and?: Array< ModelBeneficiaryConditionInput | null > | null,
  or?: Array< ModelBeneficiaryConditionInput | null > | null,
  not?: ModelBeneficiaryConditionInput | null,
  customerBeneficiariesByUsernameId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Beneficiary = {
  __typename: "Beneficiary",
  id: string,
  firstName: string,
  lastName: string,
  emailAddress: string,
  phoneNumber?: string | null,
  status: string,
  notes?: string | null,
  customerUserName: string,
  createdAt: string,
  updatedAt: string,
  customerBeneficiariesByUsernameId?: string | null,
};

export type UpdateBeneficiaryInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  emailAddress?: string | null,
  phoneNumber?: string | null,
  status?: string | null,
  notes?: string | null,
  customerUserName?: string | null,
  customerBeneficiariesByUsernameId?: string | null,
};

export type DeleteBeneficiaryInput = {
  id: string,
};

export type CreateCustomerInput = {
  id?: string | null,
  AuthUserName: string,
  firstName: string,
  lastName: string,
  emailAddress: string,
  phoneNumber?: string | null,
  s3ArchiveName?: string | null,
};

export type ModelCustomerConditionInput = {
  AuthUserName?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  emailAddress?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  s3ArchiveName?: ModelStringInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
};

export type Customer = {
  __typename: "Customer",
  id: string,
  AuthUserName: string,
  firstName: string,
  lastName: string,
  emailAddress: string,
  phoneNumber?: string | null,
  s3ArchiveName?: string | null,
  beneficiariesByUsername?: ModelBeneficiaryConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBeneficiaryConnection = {
  __typename: "ModelBeneficiaryConnection",
  items:  Array<Beneficiary | null >,
  nextToken?: string | null,
};

export type UpdateCustomerInput = {
  id: string,
  AuthUserName?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  emailAddress?: string | null,
  phoneNumber?: string | null,
  s3ArchiveName?: string | null,
};

export type DeleteCustomerInput = {
  id: string,
};

export type ModelBeneficiaryFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  emailAddress?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  status?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  customerUserName?: ModelStringInput | null,
  and?: Array< ModelBeneficiaryFilterInput | null > | null,
  or?: Array< ModelBeneficiaryFilterInput | null > | null,
  not?: ModelBeneficiaryFilterInput | null,
  customerBeneficiariesByUsernameId?: ModelIDInput | null,
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null,
  AuthUserName?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  emailAddress?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  s3ArchiveName?: ModelStringInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateBeneficiaryMutationVariables = {
  input: CreateBeneficiaryInput,
  condition?: ModelBeneficiaryConditionInput | null,
};

export type CreateBeneficiaryMutation = {
  createBeneficiary?:  {
    __typename: "Beneficiary",
    id: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber?: string | null,
    status: string,
    notes?: string | null,
    customerUserName: string,
    createdAt: string,
    updatedAt: string,
    customerBeneficiariesByUsernameId?: string | null,
  } | null,
};

export type UpdateBeneficiaryMutationVariables = {
  input: UpdateBeneficiaryInput,
  condition?: ModelBeneficiaryConditionInput | null,
};

export type UpdateBeneficiaryMutation = {
  updateBeneficiary?:  {
    __typename: "Beneficiary",
    id: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber?: string | null,
    status: string,
    notes?: string | null,
    customerUserName: string,
    createdAt: string,
    updatedAt: string,
    customerBeneficiariesByUsernameId?: string | null,
  } | null,
};

export type DeleteBeneficiaryMutationVariables = {
  input: DeleteBeneficiaryInput,
  condition?: ModelBeneficiaryConditionInput | null,
};

export type DeleteBeneficiaryMutation = {
  deleteBeneficiary?:  {
    __typename: "Beneficiary",
    id: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber?: string | null,
    status: string,
    notes?: string | null,
    customerUserName: string,
    createdAt: string,
    updatedAt: string,
    customerBeneficiariesByUsernameId?: string | null,
  } | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    id: string,
    AuthUserName: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber?: string | null,
    s3ArchiveName?: string | null,
    beneficiariesByUsername?:  {
      __typename: "ModelBeneficiaryConnection",
      items:  Array< {
        __typename: "Beneficiary",
        id: string,
        firstName: string,
        lastName: string,
        emailAddress: string,
        phoneNumber?: string | null,
        status: string,
        notes?: string | null,
        customerUserName: string,
        createdAt: string,
        updatedAt: string,
        customerBeneficiariesByUsernameId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    id: string,
    AuthUserName: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber?: string | null,
    s3ArchiveName?: string | null,
    beneficiariesByUsername?:  {
      __typename: "ModelBeneficiaryConnection",
      items:  Array< {
        __typename: "Beneficiary",
        id: string,
        firstName: string,
        lastName: string,
        emailAddress: string,
        phoneNumber?: string | null,
        status: string,
        notes?: string | null,
        customerUserName: string,
        createdAt: string,
        updatedAt: string,
        customerBeneficiariesByUsernameId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    id: string,
    AuthUserName: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber?: string | null,
    s3ArchiveName?: string | null,
    beneficiariesByUsername?:  {
      __typename: "ModelBeneficiaryConnection",
      items:  Array< {
        __typename: "Beneficiary",
        id: string,
        firstName: string,
        lastName: string,
        emailAddress: string,
        phoneNumber?: string | null,
        status: string,
        notes?: string | null,
        customerUserName: string,
        createdAt: string,
        updatedAt: string,
        customerBeneficiariesByUsernameId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBeneficiaryQueryVariables = {
  id: string,
};

export type GetBeneficiaryQuery = {
  getBeneficiary?:  {
    __typename: "Beneficiary",
    id: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber?: string | null,
    status: string,
    notes?: string | null,
    customerUserName: string,
    createdAt: string,
    updatedAt: string,
    customerBeneficiariesByUsernameId?: string | null,
  } | null,
};

export type ListBeneficiariesQueryVariables = {
  filter?: ModelBeneficiaryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBeneficiariesQuery = {
  listBeneficiaries?:  {
    __typename: "ModelBeneficiaryConnection",
    items:  Array< {
      __typename: "Beneficiary",
      id: string,
      firstName: string,
      lastName: string,
      emailAddress: string,
      phoneNumber?: string | null,
      status: string,
      notes?: string | null,
      customerUserName: string,
      createdAt: string,
      updatedAt: string,
      customerBeneficiariesByUsernameId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    id: string,
    AuthUserName: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber?: string | null,
    s3ArchiveName?: string | null,
    beneficiariesByUsername?:  {
      __typename: "ModelBeneficiaryConnection",
      items:  Array< {
        __typename: "Beneficiary",
        id: string,
        firstName: string,
        lastName: string,
        emailAddress: string,
        phoneNumber?: string | null,
        status: string,
        notes?: string | null,
        customerUserName: string,
        createdAt: string,
        updatedAt: string,
        customerBeneficiariesByUsernameId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      id: string,
      AuthUserName: string,
      firstName: string,
      lastName: string,
      emailAddress: string,
      phoneNumber?: string | null,
      s3ArchiveName?: string | null,
      beneficiariesByUsername?:  {
        __typename: "ModelBeneficiaryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CustomerByEmailQueryVariables = {
  emailAddress: string,
  lastName?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CustomerByEmailQuery = {
  customerByEmail?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      id: string,
      AuthUserName: string,
      firstName: string,
      lastName: string,
      emailAddress: string,
      phoneNumber?: string | null,
      s3ArchiveName?: string | null,
      beneficiariesByUsername?:  {
        __typename: "ModelBeneficiaryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBeneficiarySubscription = {
  onCreateBeneficiary?:  {
    __typename: "Beneficiary",
    id: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber?: string | null,
    status: string,
    notes?: string | null,
    customerUserName: string,
    createdAt: string,
    updatedAt: string,
    customerBeneficiariesByUsernameId?: string | null,
  } | null,
};

export type OnUpdateBeneficiarySubscription = {
  onUpdateBeneficiary?:  {
    __typename: "Beneficiary",
    id: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber?: string | null,
    status: string,
    notes?: string | null,
    customerUserName: string,
    createdAt: string,
    updatedAt: string,
    customerBeneficiariesByUsernameId?: string | null,
  } | null,
};

export type OnDeleteBeneficiarySubscription = {
  onDeleteBeneficiary?:  {
    __typename: "Beneficiary",
    id: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber?: string | null,
    status: string,
    notes?: string | null,
    customerUserName: string,
    createdAt: string,
    updatedAt: string,
    customerBeneficiariesByUsernameId?: string | null,
  } | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    id: string,
    AuthUserName: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber?: string | null,
    s3ArchiveName?: string | null,
    beneficiariesByUsername?:  {
      __typename: "ModelBeneficiaryConnection",
      items:  Array< {
        __typename: "Beneficiary",
        id: string,
        firstName: string,
        lastName: string,
        emailAddress: string,
        phoneNumber?: string | null,
        status: string,
        notes?: string | null,
        customerUserName: string,
        createdAt: string,
        updatedAt: string,
        customerBeneficiariesByUsernameId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    id: string,
    AuthUserName: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber?: string | null,
    s3ArchiveName?: string | null,
    beneficiariesByUsername?:  {
      __typename: "ModelBeneficiaryConnection",
      items:  Array< {
        __typename: "Beneficiary",
        id: string,
        firstName: string,
        lastName: string,
        emailAddress: string,
        phoneNumber?: string | null,
        status: string,
        notes?: string | null,
        customerUserName: string,
        createdAt: string,
        updatedAt: string,
        customerBeneficiariesByUsernameId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    id: string,
    AuthUserName: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber?: string | null,
    s3ArchiveName?: string | null,
    beneficiariesByUsername?:  {
      __typename: "ModelBeneficiaryConnection",
      items:  Array< {
        __typename: "Beneficiary",
        id: string,
        firstName: string,
        lastName: string,
        emailAddress: string,
        phoneNumber?: string | null,
        status: string,
        notes?: string | null,
        customerUserName: string,
        createdAt: string,
        updatedAt: string,
        customerBeneficiariesByUsernameId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
