import React, { useState, useEffect } from 'react';

const Slider = () => {
  const slides = [
    "slider4.jpg",
    "slider.webp",
    "slider2.jpg",
    "slider3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const delay = 3000; // 3 seconds delay for auto-slide

  // Next slide with looping
  const goToNext = () => {
    if (currentIndex === slides.length) {
      setIsTransitioning(false); // Disable transition for quick reset
      setCurrentIndex(0); // Reset to the first real slide
    } else {
      setIsTransitioning(true); // Enable smooth transition
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Go to previous slide
  const goToPrevious = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false); // Disable transition for quick reset
      setCurrentIndex(slides.length); // Go to the cloned last slide
    } else {
      setIsTransitioning(true); // Enable smooth transition
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Auto-slide effect using useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      goToNext();
    }, delay);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [currentIndex]);

  // Reset the slide index instantly when the transition ends at the cloned slide
  useEffect(() => {
    if (!isTransitioning && currentIndex === 0) {
      const resetTimeout = setTimeout(() => {
        setIsTransitioning(true); // Re-enable transition for next slide
      }, 20); // Minimal delay to avoid visual glitch

      return () => clearTimeout(resetTimeout);
    }
  }, [isTransitioning, currentIndex]);

  return (
    <div className="relative h-[300px] overflow-hidden"> {/* Adjust height and overflow */}
      {/* Image Container */}
      <div
        className={`flex ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
        style={{ transform: `translateX(${-currentIndex * 100}%)` }} // Sliding effect
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className="w-full h-[300px] object-cover" // Adjust height here
          />
        ))}
        {/* Append the first slide to the end for infinite loop */}
        <img
          src={slides[0]}
          alt="Clone of first slide"
          className="w-full h-[300px] object-cover"
        />
      </div>

      {/* Left Arrow Button */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2  bg-white py-11 px-1 hover:bg-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white py-11 px-1 hover:bg-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
