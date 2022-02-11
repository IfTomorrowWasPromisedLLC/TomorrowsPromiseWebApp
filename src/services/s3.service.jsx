import React, { Component } from 'react'

export class S3Service extends Component{
    /**
     * uploadFiles takes in an array of files and target folders
     * and uploads each file to S3.
     * @param {*} filesToUpload list of files to be added to S3
     * @param {*} targetFolder must be archive, or other specification (ex. thumbnails)
     */
    async uploadFiles(filesToUpload, targetFolder) {
        try {
          let username = await this.authService.getUsername();
          console.log(username);
          const archiveKey = targetFolder+'/';
          for (var i = 0; i < filesToUpload.length; i++) {
            let fileKey = archiveKey + filesToUpload[i].name;
            Storage.put(fileKey, filesToUpload[i], { level: 'private' });
            console.log(filesToUpload[i]);
          }
          console.log('upload files completed');
        } catch (e) {
          console.log(e);
          alert('Something went wrong uploading the files. Please try again.');
        }
      };
    /**
     * downloadFiles takes in an array of files and the target folder to download from,
     * returns files as a download for user
     * @param {*} filesToDownload list of files to download (if specified)
     * @param {*} targetFolder location to download files from - must be archive or thumbnails, etc.
     */
      async downloadFiles(filesToDownload, targetFolder) {
        try {
          let username = await this.authService.getUsername();
          console.log(username);
          var archiveKey = targetFolder+'/';
          for (var i = 0; i < filesToDownload.length; i++) {
            let fileKey = archiveKey + filesToDownload[i].name;
            //need to use filekey in download
            console.log("add in filekey, doesn't do anything rn")
          }
          console.log('download files completed');
        } catch (e) {
          console.log(e);
          alert('Something went wrong downloading the files. Please try again.');
        }
      }

    }
