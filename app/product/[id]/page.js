// app/product/[id]/page.js

import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {
  const { id } = params;

  const res = await fetch(
    `${process.env.VITE_API_BASE}/api/books/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return notFound();
  }

  const { data: book } = await res.json();

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>{book.title}</h1>

      <img
        src={book.cover_url}
        alt={book.title}
        style={{ width: "280px", marginTop: "20px", borderRadius: "6px" }}
      />

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        <strong>Author:</strong> {book.author}
      </p>

      <p style={{ fontSize: "18px" }}>
        <strong>Price:</strong> {book.currency} {book.price}
      </p>

      <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
        {book.description}
      </p>

      <p style={{ marginTop: "20px" }}>
        <strong>Category:</strong> {book.category}
      </p>

      <p>
        <strong>Stock:</strong> {book.stock}
      </p>
    </div>
  );
}
