"use client";

import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable"; // Import gesture detection

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/banner1.jpg",
      alt: "Banner 1",
      title: "Organic Products Sale!",
      description: "Get up to 50% off on organic pulses and grains.",
    },
    {
      image: "/images/banner2.jpg",
      alt: "Banner 2",
      title: "Fresh from the Farm",
      description: "Directly sourced from farmers to your table.",
    },
    {
      image: "/images/banner3.jpg",
      alt: "Banner 3",
      title: "Healthy Living Starts Here",
      description: "Explore our range of organic and natural products.",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Swipe handlers for mobile touch gestures
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide, // Swipe left → Next slide
    onSwipedRight: prevSlide, // Swipe right → Previous slide
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Allows swipe with mouse on desktop too
  });

  return (
    <div
      className="relative w-full h-96 overflow-hidden"
      {...handlers} // Apply swipe gestures
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
              <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow (Desktop) */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      >
        ❮
      </button>

      {/* Right Arrow (Desktop) */}
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      >
        ❯
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
