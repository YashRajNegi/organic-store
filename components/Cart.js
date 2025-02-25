"use client";

import { useCart } from "./CartContext";
import Image from "next/image";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";

const Cart = () => {
  const { cart, updateQuantity, removeItem } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="max-w-[1280px] mx-auto p-8">
        <div className="flex items-center gap-2 mb-6">
          <ShoppingCart className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <p className="text-lg text-gray-500">Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1280px] mx-auto p-8">
      <div className="flex items-center gap-2 mb-6">
        <ShoppingCart className="w-6 h-6" />
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                Cart Items ({cart.length})
              </h2>
              <button className="text-blue-600 hover:underline">
                Deselect all items
              </button>
            </div>

            <div className="h-px bg-gray-200 mb-6"></div>

            {cart.map((item) => (
              <div key={item.id} className="mb-6">
                <div className="flex gap-4">
                  <div className="flex items-start">
                    <input type="checkbox" className="w-4 h-4 mt-1" />
                  </div>
                  <div className="w-24 h-24 relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium mb-1">{item.title}</h3>
                        <div className="text-sm text-gray-500 mb-2">
                          by {item.brand || "Brand Name"}
                        </div>
                        <div className="text-sm text-green-600">In stock</div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold">
                            ₹{item.price}
                          </span>
                          {item.discount && (
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                              {Math.round(
                                ((item.discount - item.price) / item.discount) *
                                  100
                              )}
                              % off
                            </span>
                          )}
                        </div>
                        {item.discount && (
                          <div className="text-sm text-gray-500 line-through">
                            M.R.P.: ₹{item.discount}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center border rounded-md">
                        <button
                          className="h-8 w-8 hover:bg-gray-100 p-2"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          className="h-8 w-8 hover:bg-gray-100 p-2"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="h-6 w-px bg-gray-200"></div>
                      <button
                        className="text-red-600 hover:text-red-700 flex items-center"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </button>
                      <div className="h-6 w-px bg-gray-200"></div>
                      <button className="hover:text-gray-700">
                        Save for later
                      </button>
                      <div className="h-6 w-px bg-gray-200"></div>
                      <button className="hover:text-gray-700">
                        See more like this
                      </button>
                    </div>
                  </div>
                </div>
                <div className="h-px bg-gray-200 mt-6"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Items ({cart.length}):</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Delivery:</span>
                <span className="text-green-600">FREE</span>
              </div>
              <div className="h-px bg-gray-200 my-4"></div>
              <div className="flex justify-between text-lg font-bold">
                <span>Order Total:</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
