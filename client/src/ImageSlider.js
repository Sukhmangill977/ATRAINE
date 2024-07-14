// client/src/ImageSlider.js
import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

import Image1 from './images/Image1.gif';
import Image2 from './images/image2.gif';
import Image3 from './images/image3.gif';

const images = [Image1, Image2, Image3];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-slider">
      <img src={images[currentIndex]} alt="Sliding images" />
    </div>
  );
}

export default ImageSlider;
