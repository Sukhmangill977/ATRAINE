import React from 'react';
import './Certificate.css';
import certificateImage from '../src/images/certificate.png'; // Import the certificate image

const CertificateSample = () => {
  return (
    <div className="Certificate-container">
      <h1 style={{ marginBottom: '1rem' }}>Sample Certificate</h1>
      <img
        src={certificateImage} // Use the imported certificate image
        alt="Certificate Sample"
        className="Certificate-image"
      />
    </div>
  );
}

export default CertificateSample;
