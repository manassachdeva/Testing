// src/pages/Home.js

import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Home Page</h1>
      <p>Welcome to the GitHub Repository Page Clone!</p>
    </HomeContainer>
  );
};

export default Home;
