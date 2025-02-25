// components/ui/Button.js
"use client";

import React from "react";

const Button = ({ children, className, variant = "default", size = "default", onClick }) => {
  const baseStyles = "rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const variantStyles = {
    default: "bg-gray-900 text-white hover:bg-gray-700",
    ghost: "bg-transparent hover:bg-gray-100",
    destructive: "bg-red-600 text-white hover:bg-red-700",
  };
  const sizeStyles = {
    default: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
    icon: "p-2",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;