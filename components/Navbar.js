"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Search, Menu, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo with Image */}
        <div className="flex items-center">
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
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-green-600">
            Home
          </Link>
          <div className="relative group">
            <button className="flex items-center text-gray-600 hover:text-green-600">
              Products <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 mt-2">
              <Link
                href="/products/pulses"
                className="block px-4 py-2 text-gray-800 hover:bg-green-50"
              >
                Pulses
              </Link>
              <Link
                href="/products/millets"
                className="block px-4 py-2 text-gray-800 hover:bg-green-50"
              >
                Millets
              </Link>
              <Link
                href="/products/organic-grains"
                className="block px-4 py-2 text-gray-800 hover:bg-green-50"
              >
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
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-800 hover:bg-green-50"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block px-4 py-2 text-gray-800 hover:bg-green-50"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-gray-800 hover:bg-green-50"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-gray-800 hover:bg-green-50"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
