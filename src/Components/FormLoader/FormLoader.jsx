import React from 'react';
import './FormLoader.css';

const FormLoader = () => {
  return (
    <div className="formloader-container">
      <div className="formloader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default FormLoader;
