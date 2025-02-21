import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-600 mb-6 text-center">
        About UTTRANJALI
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="md:w-1/2">
          <Image
            src="/images/about-image.jpg"
            alt="UTTRANJALI"
            width={500}
            height={300}
            unoptimized={true}
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 prose max-w-none">
          <p className="text-lg text-gray-700">
            <strong>UTTRANJALI</strong> is dedicated to bringing the pure and
            organic produce of Uttarakhand to your table. Our mission is to
            support local farmers, preserve traditional farming practices, and
            provide our customers with the healthiest, most nutritious foods
            nature has to offer.
          </p>

          <p className="text-lg text-gray-700">
            Founded in <strong>[year]</strong>, we work closely with farmers in
            the Himalayan region to cultivate a wide variety of organic grains,
            pulses, and millets. Our products are grown without harmful
            pesticides or chemicals, ensuring top-quality food for you.
          </p>

          <p className="text-lg text-gray-700">
            At <strong>UTTRANJALI</strong>, we believe in sustainability, fair
            trade, and organic farming as a way to create a healthier planet.
            Join us in our journey toward a more sustainable future.
          </p>

          <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
