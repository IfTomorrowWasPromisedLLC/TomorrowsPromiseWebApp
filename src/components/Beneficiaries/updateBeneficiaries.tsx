// import React from 'react'
// import Beneficiary from '../../model/beneficiary'

// const updateBeneficiaries = (props: {beneficiary: Beneficiary}) => {
//   return (
//     <Segment color="blue">
//       <Grid padded>
//         <Grid.Column>
//           <Header as="h1">Account Information</Header>
//           <p>Please update your details.</p>

//           <Form onSubmit={this.handleSubmit} loading={loading}>
//             <Form.Group>
//               <Form.Input
//                 name="nickname"
//                 value={nickname}
//                 label="Display Name"
//                 placeholder="Display name"
//                 width={6}
//                 onChange={this.handleChange}
//                 error={false}
//               />
//               <Form.Input label="Username" value={email} width={10} />
//             </Form.Group>

//             <Form.Group>
//               <Form.Input
//                 name="given_name"
//                 value={given_name}
//                 label="First name"
//                 placeholder="First Name"
//                 width={6}
//                 onChange={this.handleChange}
//                 error={false}
//               />
//               <Form.Input
//                 name="middle_name"
//                 value={middle_name}
//                 label="Middle Name"
//                 placeholder="Middle Name"
//                 width={4}
//                 onChange={this.handleChange}
//                 error={false}
//               />
//               <Form.Input
//                 name="family_name"
//                 value={family_name}
//                 label="Last Name"
//                 placeholder="Last Name"
//                 width={6}
//                 onChange={this.handleChange}
//                 error={false}
//               />
//             </Form.Group>

//             <Form.Group>
//               <Form.Input
//                 name="birthdate"
//                 value={birthdate}
//                 label="Birthday"
//                 placeholder="02/02/2002"
//                 width={4}
//                 onChange={this.handleChange}
//                 error={false}
//               />
//               <Form.Select
//                 name="gender"
//                 value={gender}
//                 label="Gender"
//                 placeholder="Gender"
//                 options={GENDER_OPTIONS}
//                 width={6}
//                 onChange={this.handleChange}
//                 error={false}
//               />
//             </Form.Group>

//             <Form.Group>
//               <Form.Input
//                 name="phone_number"
//                 value={phone_number}
//                 label="Mobile number"
//                 placeholder="+61 0400 000 000"
//                 width={6}
//                 onChange={this.handleChange}
//                 error={false}
//               />
//               <Form.Input
//                 name="website"
//                 value={website}
//                 label="Website"
//                 placeholder="www.mywebsite.com"
//                 width={10}
//                 onChange={this.handleChange}
//                 error={false}
//               />
//             </Form.Group>

//             <Form.Group>
//               <Form.Input
//                 name="address"
//                 value={address}
//                 label="Address"
//                 placeholder="2/77 New Street, Newport 3015 Melbourne, Victoria, Australia "
//                 width={16}
//                 onChange={this.handleChange}
//                 error={false}
//               />
//             </Form.Group>

//             <Message
//               success
//               header="Account Details Updated"
//               content="Your details have been updated."
//             />

//             <Message
//               error
//               header="Somthing Went Wrong"
//               content="One of the fields has error. Please look over the forms to see where the error is. "
//             />

//             <Button type="submit">Submit</Button>
//           </Form>
//         </Grid.Column>
//       </Grid>
//     </Segment>
//   );
// }
// }


// export default updateBeneficiaries