"use client";
import React from "react";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const products = [
    {
      image: "/images/product1.jpg",
      title: "Organic Toor Dal",
      price: "120",
      discount: "150",
    },
    {
      image: "/images/product2.jpg",
      title: "Organic Brown Rice",
      price: "200",
      discount: "250",
    },
    {
      image: "/images/product3.jpg",
      title: "Khichdi Mix",
      price: "300",
      discount: "350",
    },
    {
      image: "/images/product4.jpg",
      title: "Mandwa ",
      price: "180",
      discount: "220",
    },
    {
      image: "/images/product5.jpg",
      title: "Jhangora",
      price: "150",
      discount: "180",
    },
  ];

  const CustomPrevArrow = ({ onClick }) => (
    <div 
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={24} />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div 
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <FaArrowRight size={24} />
    </div>
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />, 
    prevArrow: <CustomPrevArrow />, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative bg-green-50">
      {/* Banner Section */}
      <Banner />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 text-center py-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Pure Organic Products</span>
          <span className="block text-green-600">Direct from Nature</span>
        </h1>
        <p className="mt-3 text-gray-500 sm:text-lg md:mt-5 md:text-xl">
          Discover the finest selection of organic pulses, millets, and grains.
        </p>
        <div className="mt-5 flex justify-center space-x-4">
          <a href="#" className="px-8 py-3 bg-green-600 text-white rounded-md">Shop Now</a>
          <a href="#" className="px-8 py-3 border border-green-600 text-green-600 rounded-md">Learn More</a>
        </div>

        {/* Product Cards Section with Slider */}
        <div className="mt-12 relative">
          <Slider {...sliderSettings}>
            {products.map((product, index) => (
              <div key={index} className="px-2">
                <ProductCard
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  discount={product.discount}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
