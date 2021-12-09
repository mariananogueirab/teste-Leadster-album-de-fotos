import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

const Spinning = function SpinnerFunc() {
  return (
    <Spinner animation="border" role="status" size="xxl">
      <span className="visually-hidden spinner">Loading...</span>
    </Spinner>
  );
};

export default Spinning;
