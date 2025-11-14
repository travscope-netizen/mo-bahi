"use client";

import { useState } from "react";

export default function AddBook() {
 const [form, setForm] = useState({
  title: "",
  author: "",
  price: "",
  currency: "INR",
  cover_url: "",
  description: "",
  stock: "",
  slug: "",
  category: "General",
});
<select
  value={form.category}
  onChange={(e) => setForm({ ...form, category: e.target.value })}
  className="border p-2 rounded"
>
  <option value="General">General</option>
  <option value="Fiction">Fiction</option>
  <option value="Non-Fiction">Non-Fiction</option>
  <option value="Kids">Kids</option>
  <option value="School">School</option>
  <option value="College">College</option>
  <option value="Exam Prep">Exam Prep</option>
  <option value="Used Books">Used Books</option>
</select>

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/admin/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Book added successfully!");
      window.location.href = "/admin";
    } else {
      alert("Failed to add book");
    }
  };

  return (
    <div>
      <h1>Add New Book</h1>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10, maxWidth: 400 }}>
        {Object.keys(form).map((key) => (
          <input
            key={key}
            placeholder={key}
            value={form[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            required
          />
        ))}

        <button
          type="submit"
          style={{ padding: 10, background: "black", color: "white" }}
        >
          Add Book
        </button>
      </form>
    </div>
  );
}
