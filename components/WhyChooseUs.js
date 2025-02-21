import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Reason 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-medium">100% Organic</h3>
            <p className="text-gray-600">We provide pure and chemical-free products.</p>
          </div>

          {/* Reason 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-medium">Direct from Farmers</h3>
            <p className="text-gray-600">Supporting local farmers and sustainable practices.</p>
          </div>

          {/* Reason 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-medium">Certified Quality</h3>
            <p className="text-gray-600">Our products meet the highest organic standards.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
