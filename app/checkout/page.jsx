"use client";

import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function placeOrder(e) {
    e.preventDefault();

    const order = {
      customer_name: form.name,
      customer_phone: form.phone,
      customer_address: form.address,
      items: cart,
      total,
    };

    await fetch("/api/orders", {
      method: "POST",
      body: JSON.stringify(order),
    });

    clearCart();
    window.location.href = "/order-success";
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow mt-10">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <form onSubmit={placeOrder} className="flex flex-col gap-4">

        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <textarea
          name="address"
          placeholder="Full Address"
          rows="4"
          value={form.address}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <h2 className="text-xl font-bold">Total: ₹{total}</h2>

        <button className="bg-green-600 text-white p-3 rounded">
          Place Order
        </button>
      </form>
    </div>
  );
}
