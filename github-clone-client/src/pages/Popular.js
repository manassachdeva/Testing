// src/pages/Popular.js

import React from 'react';
import styled from 'styled-components';

const PopularContainer = styled.div`
  padding: 2rem;
`;

const Popular = () => {
  return (
    <PopularContainer>
      <h1>Popular Repositories</h1>
      <p>List of popular repositories.</p>
    </PopularContainer>
  );
};

export default Popular;
