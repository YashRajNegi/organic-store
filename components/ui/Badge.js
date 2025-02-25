// components/ui/Badge.js
"use client";

import React from "react";

const Badge = ({ children, className, variant = "default" }) => {
  const variantStyles = {
    default: "bg-gray-100 text-gray-800",
    destructive: "bg-red-100 text-red-800",
  };

  return (
    <span className={`px-2 py-1 text-xs rounded-full ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;