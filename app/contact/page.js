import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-green-600 mb-6 text-center">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4 text-lg text-gray-700">
                We'd love to hear from you. Please fill out the form below or reach out to us directly.
              </p>
              
              <div className="mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-green-600" />
                <p className="text-lg">123 Organic Lane, Dehradun, Uttarakhand, India</p>
              </div>
              
              <div className="mb-4 flex items-center gap-2">
                <FaEnvelope className="text-green-600" />
                <p className="text-lg">info@uttranjali.com</p>
              </div>
              
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-green-600" />
                <p className="text-lg">+91 1234567890</p>
              </div>
            </div>
            
            <form className="space-y-4 bg-white p-6 rounded-lg shadow-md">
              <div>
                <label htmlFor="name" className="block mb-1 font-semibold">
                  Name
                </label>
                <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-semibold">
                  Email
                </label>
                <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-semibold">
                  Message
                </label>
                <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded" required></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
    );
}

export default Contact;
