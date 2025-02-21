"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Search, Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="UTTRANJALI Logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
          <span className="ml-2 text-xl font-bold text-gray-800">
            UTTRANJALI
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-green-600">
            Home
          </Link>
          {/* Products Dropdown */}
          <div className="relative group">
            <button className="flex items-center text-gray-600 hover:text-green-600">
              Products <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 mt-2">
              <Link href="/products/pulses" className="block px-4 py-2 hover:bg-green-50">
                Pulses
              </Link>
              <Link href="/products/millets" className="block px-4 py-2 hover:bg-green-50">
                Millets
              </Link>
              <Link href="/products/organic-grains" className="block px-4 py-2 hover:bg-green-50">
                Organic Grains
              </Link>
            </div>
          </div>
          <Link href="/about" className="text-gray-600 hover:text-green-600">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-green-600">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Search className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <ShoppingCart className="h-5 w-5 text-gray-600" />
            <span className="absolute top-0 right-0 bg-green-600 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
              0
            </span>
          </button>
          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-3/4 max-w-sm bg-white shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="absolute top-4 right-4 p-2" onClick={() => setIsMenuOpen(false)}>
          <X className="h-6 w-6 text-gray-600" />
        </button>
        <div className="mt-16 px-6">
          <Link href="/" className="block py-3 text-gray-800 hover:bg-green-50" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          {/* Mobile Products Dropdown */}
          <div className="py-3">
            <button
              className="flex justify-between w-full text-gray-800 py-3 hover:bg-green-50"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Products <ChevronDown className={`h-4 w-4 transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {isDropdownOpen && (
              <div className="ml-4 mt-2">
                <Link href="/products/pulses" className="block py-2 hover:bg-green-50" onClick={() => setIsMenuOpen(false)}>
                  Pulses
                </Link>
                <Link href="/products/millets" className="block py-2 hover:bg-green-50" onClick={() => setIsMenuOpen(false)}>
                  Millets
                </Link>
                <Link href="/products/organic-grains" className="block py-2 hover:bg-green-50" onClick={() => setIsMenuOpen(false)}>
                  Organic Grains
                </Link>
              </div>
            )}
          </div>
          <Link href="/about" className="block py-3 text-gray-800 hover:bg-green-50" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="block py-3 text-gray-800 hover:bg-green-50" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
