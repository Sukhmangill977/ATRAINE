// client/src/CertificateSample.js

import React from 'react';
import './Certificate.css';

const CertificateSample = () => {
  return (
    <div className="Certificate-container">
      <h1 style={{ marginBottom: '1rem' }}>Sample Certificate</h1>
      <img
        src="https://i.pinimg.com/564x/f1/1f/e8/f11fe879f786a274b725daecff7f653b.jpg"
        alt="Certificate Sample"
        className="Certificate-image"
      />
    </div>
  );
}

export default CertificateSample;
