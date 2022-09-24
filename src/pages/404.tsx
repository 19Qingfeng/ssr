import React from 'react';
import { styled } from '@mui/material';

const ErrorContainer = styled('div')(({ theme }) => {
  return {
    width: '300px',
    background: '#000',
    color: '#fff',
  };
});

const ErrorPage = () => {
  return <ErrorContainer>Error 404!</ErrorContainer>;
};

export default ErrorPage;
