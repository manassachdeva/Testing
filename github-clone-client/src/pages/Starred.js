// src/pages/Starred.js

import React from 'react';
import styled from 'styled-components';

const StarredContainer = styled.div`
  padding: 2rem;
`;

const Starred = () => {
  return (
    <StarredContainer>
      <h1>Starred Repositories</h1>
      <p>List of repositories you've starred.</p>
    </StarredContainer>
  );
};

export default Starred;
