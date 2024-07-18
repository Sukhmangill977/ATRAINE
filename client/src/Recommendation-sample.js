import React from 'react';
import './Recommendation.css';
import lorImage from '../src/images/lor.png'; // Import the image 
const Recommendation = () => {
  return (
    <div className="recommendation-container">
      <h1>Recommendation Sample</h1>
      <img
        src={lorImage} // Use imported image variable here
        alt="Recommendation Sample"
        className="recommendation-image"
      />
    </div>
  );
}

export default Recommendation;
