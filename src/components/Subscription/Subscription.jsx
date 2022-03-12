import React from 'react';
import styled from 'styled-components';

const SubscriptionContainer = styled.div``;
const DataContainer = styled.div``;

const Subscription = () => (
  <SubscriptionContainer>
        Subscription Component
    <DataContainer>
      Data
    </DataContainer>
    <DataContainer>
      Photo Count
    </DataContainer>
    <DataContainer>
      Video Count
    </DataContainer>
    <DataContainer>
      Document Count
    </DataContainer>
  </SubscriptionContainer>
);

Subscription.propTypes = {};

Subscription.defaultProps = {};

export default Subscription;
