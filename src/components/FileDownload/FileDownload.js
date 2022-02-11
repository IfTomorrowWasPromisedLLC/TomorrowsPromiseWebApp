import React from 'react';
import PropTypes from 'prop-types';
import styles from './FileDownload.module.css';

const FileDownload = () => (
  <div className={styles.FileDownload} data-testid="FileDownload">
    FileDownload Component
  </div>
);

FileDownload.propTypes = {};

FileDownload.defaultProps = {};

export default FileDownload;
