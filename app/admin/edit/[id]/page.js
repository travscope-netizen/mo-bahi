"use client";

import { useEffect, useState } from "react";

export default function EditBook({ params }) {
  const { id } = params;
  const [form, setForm] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/books/id/${id}`)
      .then((res) => res.json())
      .then((json) => setForm(json.data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/admin/books/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Book updated");
      window.location.href = "/admin";
    } else {
      alert("Update failed");
    }
  };

  if (!form) return <p>Loading...</p>;

  return (
    <div>
      <h1>Edit Book</h1>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10, maxWidth: 400 }}>
        {Object.keys(form).map((key) => (
          <input
            key={key}
            placeholder={key}
            value={form[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          />
        ))}

        <button
          type="submit"
          style={{ padding: 10, background: "black", color: "white" }}
        >
          Save
        </button>
      </form>
    </div>
  );
}
