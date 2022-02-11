import React from 'react';

import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';

import { withAuthenticator, S3Album } from 'aws-amplify-react-native';

Amplify.configure(awsconfig);

const AlbumWrapper = styled.div``;

const ViewFiles = () => (
  <AlbumWrapper data-testid="ViewFiles">
    ViewFiles Component
  {/* May be wrong, check later once we make auth service */}
    <S3Album level="private" path={string(await this.authService.getUsername())+'/archive/'
}/>
  </AlbumWrapper>
);

ViewFiles.propTypes = {};

ViewFiles.defaultProps = {};

export default withAuthenticator(ViewFiles);
