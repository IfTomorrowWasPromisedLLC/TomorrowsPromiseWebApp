import React from 'react';
import PropTypes from 'prop-types';
import styles from './Account.module.css';

const Account = () => (
  <div className={styles.Account} data-testid="Account">
    Account Component
  </div>
);

Account.propTypes = {};

Account.defaultProps = {};

export default Account;
