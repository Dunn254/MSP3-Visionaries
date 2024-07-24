import React, { useState } from 'react';
import './HoverImage.css';

const HoverImage = ({ image1, image2, altText }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="hover-image"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={hover ? image2 : image1} alt={altText} />
    </div>
  );
};

export default HoverImage;
