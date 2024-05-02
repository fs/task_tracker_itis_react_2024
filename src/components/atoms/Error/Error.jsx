import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Error = ({ errorMessage }) => {
  return (
    <Alert variant="danger">
      {errorMessage}
    </Alert>
  );
}

export default Error;
