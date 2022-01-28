import React from 'react';
import PropTypes from 'prop-types';
import styles from './Auth.module.css';
import { Amplify } from 'aws-amplify';
import { AmplifyProvider, Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports';
import { retry } from '@aws-amplify/core';
import { NavBar } from './ui-components';

Amplify.configure(awsExports);


function Auth(){
  return (
<AmplifyProvider>
<NavBar />
</AmplifyProvider>
    );
}

export default Auth;
