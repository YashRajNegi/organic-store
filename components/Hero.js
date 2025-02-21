import React from "react";
import Banner from "./Banner";
import ProductCard from "./ProductCard";

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
      image: "/images/product2.jpg",
      title: "Organic Brown Rice",
      price: "200",
      discount: "250",
    },
    {
      image: "/images/product3.jpg",
      title: "Organic Quinoa",
      price: "300",
      discount: "350",
    },
  ];

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

        {/* Product Cards Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              discount={product.discount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;