import React from 'react';
import { LoaderContainer, LoaderSpinner } from './styled'; // Импорт стилей

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderSpinner />
    </LoaderContainer>
  );
};

export default Loader;
