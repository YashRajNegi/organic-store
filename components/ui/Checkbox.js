// components/ui/Checkbox.js
"use client";

import React from "react";

const Checkbox = ({ className }) => {
  return (
    <input
      type="checkbox"
      className={`w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${className}`}
    />
  );
};

export default Checkbox;