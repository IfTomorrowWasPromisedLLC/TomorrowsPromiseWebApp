import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useState } from "react";
import { S3Service } from "../../services/s3.service";

const FileUploadContainer = styled.div``;
const ButtonContainer = styled.div``;
const Button = styled.button``;

const FileUpload = () => {
  const [files, setFiles] = useState("");
  //state for checking file size
  const [fileSize, setFileSize] = useState(true);
  //file upload progress
  const [fileUploadProgress, setFileUploadProgress] = useState(false);
  //for displaying response message(s)
  const [fileUploadResponse, setFileUploadResponse] = useState(null);
  //causes a warning in browser dev tools. Seems like NBD, but circle back later
  const fileRef = React.useRef(null);
  var S3Location = "";

  const handleChange = (event) => {
    setFiles();
    console.log("handle change");
  };

  const handleClick = (targetFolder) => {
    console.log("handle click");
    console.log(targetFolder)
    S3Location = targetFolder;
    console.log(S3Location);
    fileRef.current.click();
  };

  const uploadFileHandler = (event) => {
    setFiles(event.target.files);
  };

  const submitFileHandler = (event) => {
    event.preventDefault();
    setFileSize(true);
    setFileUploadProgress(true);
    setFileUploadResponse(null);
  };

  return (
    <FileUploadContainer data-testid="FileUpload">
      <ButtonContainer>
        <Button data-testid="FileUploadButton" 
        onClick={() => handleClick("archive")}>
          Upload to Archive
        </Button>
        <input
          ref={fileRef}
          multiple
          onChange={handleChange}
          type="file"
          hidden
          data-testid="FileUploadInput"
        />
      </ButtonContainer>
      {/* <Button data-testid="FileUploadButton" 
      onClick={}>
        Upload to OTHER CHANGE NAME LATEr
      </Button> */}
    </FileUploadContainer>
  );
};

FileUpload.propTypes = {};

FileUpload.defaultProps = {};

export default FileUpload;
