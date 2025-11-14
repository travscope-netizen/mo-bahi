"use client";

import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const res = await fetch("/api/get-orders");
      const json = await res.json();
      setOrders(json.data || []);
    }
    loadOrders();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">All Orders</h1>

      {orders.map((order) => (
        <div
          key={order.id}
          className="p-4 bg-white shadow rounded mb-4"
        >
          <h3 className="font-bold">Order ID: {order.id}</h3>
          <p><b>Name:</b> {order.customer_name}</p>
          <p><b>Phone:</b> {order.customer_phone}</p>
          <p><b>Address:</b> {order.customer_address}</p>
          <p><b>Total:</b> ₹{order.total}</p>

          <p className="mt-2 font-semibold">Items:</p>
          <ul className="ml-6 list-disc">
            {order.items.map((item) => (
              <li key={item.id}>
                {item.title} × {item.qty}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
