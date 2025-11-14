"use client";

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQty } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0)
    return <h1 className="text-2xl font-bold">Your Cart is Empty</h1>;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between p-4 bg-white shadow rounded mb-4"
        >
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p>₹{item.price}</p>

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => updateQty(item.id, item.qty - 1)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                -
              </button>

              <span>{item.qty}</span>

              <button
                onClick={() => updateQty(item.id, item.qty + 1)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-600 font-bold"
          >
            ✕
          </button>
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-6">Total: ₹{total}</h2>

      <a
        href={`https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20want%20to%20place%20an%20order:%0A${encodeURIComponent(
          JSON.stringify(cart, null, 2)
        )}%0ATotal:%20₹${total}`}
        target="_blank"
        className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded"
      >
        Checkout on WhatsApp
      </a>
    </div>
  );
}
