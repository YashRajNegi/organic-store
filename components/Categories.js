import React from "react";

const Categories = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Our Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Category 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-medium">Fruits</h3>
            <p className="text-gray-600">Fresh and organic fruits sourced from the best farms.</p>
          </div>

          {/* Category 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-medium">Vegetables</h3>
            <p className="text-gray-600">Nutritious and pesticide-free vegetables for a healthy life.</p>
          </div>

          {/* Category 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-lg font-medium">Dairy Products</h3>
            <p className="text-gray-600">Pure and organic dairy products directly from farmers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
