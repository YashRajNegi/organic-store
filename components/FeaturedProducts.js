import React from "react";

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product 1 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-medium">Organic Honey</h3>
            <p className="text-gray-600">Pure and natural honey harvested from organic farms.</p>
          </div>

          {/* Product 2 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-medium">Almonds</h3>
            <p className="text-gray-600">High-quality almonds rich in nutrients and taste.</p>
          </div>

          {/* Product 3 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-medium">Fresh Milk</h3>
            <p className="text-gray-600">Organic and unprocessed milk directly from farms.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
