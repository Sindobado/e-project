import React, { useState } from "react";
import './Carousel.css' // Add styles for better visuals

const images = [
  "https://via.placeholder.com/600x300?text=Slide+1",
  "https://via.placeholder.com/600x300?text=Slide+2",
  "https://via.placeholder.com/600x300?text=Slide+3",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>‹</button>
      <img src={images[currentIndex]} alt="carousel slide" className="carousel-image" />
      <button className="next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default Carousel;