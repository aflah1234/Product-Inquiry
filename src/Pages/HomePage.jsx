import React from 'react';
import image from "../assets/images.png";
import "../styles/Homepage.css"
const HomePage = () => {
    return (
        <div className='homepage'>
          <img src={image} className="homepage-image" />
        </div>
    );
}

export default HomePage;