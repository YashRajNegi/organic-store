// components/ui/Separator.js
"use client";

import React from "react";

const Separator = ({ className, orientation = "horizontal" }) => {
  return (
    <div
      className={
        orientation === "horizontal"
          ? `w-full h-px bg-gray-200 ${className}`
          : `h-full w-px bg-gray-200 ${className}`
      }
    />
  );
};

export default Separator;