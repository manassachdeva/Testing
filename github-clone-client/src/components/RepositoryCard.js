// src/components/RepositoryCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.h2`
  margin-top: 0;
`;

const CardDescription = styled.p`
  color: #555;
`;

const DetailsLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  &:hover {
    text-decoration: underline;
  }
`;

const RepositoryCard = ({ repo }) => {
  return (
    <Card>
      <CardTitle>{repo.name}</CardTitle>
      <CardDescription>{repo.description}</CardDescription>
      <DetailsLink to={`/repository/${repo.id}`}>View Details</DetailsLink>
    </Card>
  );
};

export default RepositoryCard;
