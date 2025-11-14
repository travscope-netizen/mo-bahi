"use client";

import { useState } from "react";

export default function BookForm({ initialValues = {}, onSubmit, submitText }) {
  const [form, setForm] = useState({
    title: initialValues.title || "",
    author: initialValues.author || "",
    price: initialValues.price || "",
    currency: initialValues.currency || "INR",
    cover_url: initialValues.cover_url || "",
    description: initialValues.description || "",
    stock: initialValues.stock || "",
    slug: initialValues.slug || "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        width: "400px",
        padding: 20,
        border: "1px solid #ddd",
      }}
    >
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />

      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} required />

      <input
        name="price"
        placeholder="Price"
        type="number"
        value={form.price}
        onChange={handleChange}
        required
      />

      <input name="currency" placeholder="Currency" value={form.currency} onChange={handleChange} />

      <input name="cover_url" placeholder="Cover Image URL" value={form.cover_url} onChange={handleChange} />

      <textarea
        name="description"
        placeholder="Description"
        rows="4"
        value={form.description}
        onChange={handleChange}
      />

      <input name="stock" placeholder="Stock Qty" type="number" value={form.stock} onChange={handleChange} required />

      <input name="slug" placeholder="Slug (unique)" value={form.slug} onChange={handleChange} required />

      <button
        type="submit"
        style={{
          padding: 10,
          background: "#333",
          color: "white",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        {submitText}
      </button>
    </form>
  );
}
