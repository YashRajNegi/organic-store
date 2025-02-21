import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Uttranjali</h3>
            <p className="text-gray-400">Pure organic products from farmers to your table.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400"><Phone className="inline-block w-5 h-5 text-green-400" /> +91 1234567890</p>
            <p className="text-gray-400"><Mail className="inline-block w-5 h-5 text-blue-400" /> info@uttranjali.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Facebook className="text-blue-500" />
              <Instagram className="text-pink-500" />
              <Twitter className="text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
