// app/products/page.js
"use client";
// app/products/page.js
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id} // Unique key for React
            id={product.id} // Pass the unique ID to ProductCard
            image={product.image}
            title={product.title}
            price={product.price}
            discount={product.discount}
          />
        ))}
      </div>
    </div>
  );
}