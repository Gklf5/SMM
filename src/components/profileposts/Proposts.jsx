import React from 'react';
import Propost from './Propost';
import './proposts.css';

export default function Posts() {
  // Sample image URLs (replace with your own)
  const images = [
    "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  ];

  return (
    <div className="postsContainer1">
      <div className="header11">
        <span className="header21">Projects Available.....</span>
      </div>
      <div className="posts1">
        {/* Map through image URLs and render Propost components */}
        {images.map((image, index) => (
          <Propost key={index} img={image} />
        ))}
      </div>
    </div>
  );
}
