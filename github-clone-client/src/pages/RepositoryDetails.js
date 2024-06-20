// src/pages/RepositoryDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';

const RepositoryDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Repository Details</h1>
      <p>Details for repository ID: {id}</p>
    </div>
  );
};

export default RepositoryDetails;
