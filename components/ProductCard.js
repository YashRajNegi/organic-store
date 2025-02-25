// components/ProductCard.js
"use client";

import React from "react";
import { useCart } from "./CartContext";

const ProductCard = ({ id, image, title, price, discount }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, image, title, price, discount });
  };

  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
      {/* Image Container */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center mt-2">
          <span className="text-xl font-bold text-green-600">₹{price}</span>
          {discount && (
            <span className="ml-2 text-sm text-gray-500 line-through">₹{discount}</span>
          )}
        </div>
        <button
          className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
