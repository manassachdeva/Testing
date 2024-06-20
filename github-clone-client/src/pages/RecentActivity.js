// src/pages/RecentActivity.js

import React from 'react';
import styled from 'styled-components';

const RecentActivityContainer = styled.div`
  padding: 2rem;
`;

const RecentActivity = () => {
  return (
    <RecentActivityContainer>
      <h1>Recent Activity</h1>
      <p>List of repositories with recent activity.</p>
    </RecentActivityContainer>
  );
};

export default RecentActivity;
