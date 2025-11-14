"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminPage() {
  const [books, setBooks] = useState([]);
  const API = process.env.NEXT_PUBLIC_API_URL;

  async function loadBooks() {
    const res = await fetch(`${API}/api/books`);
    const json = await res.json();
    setBooks(json.data || []);
  }

  async function deleteBook(id) {
    if (!confirm("Delete this book?")) return;

    await fetch(`${API}/api/books/${id}`, { method: "DELETE" });
    loadBooks();
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1>Admin Dashboard</h1>

      <Link href="/admin/add" style={{ padding: 10, background: "green", color: "white" }}>
        ➕ Add New Book
      </Link>

      <table border="1" cellPadding="10" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map((b) => (
            <tr key={b.id}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.price}</td>
              <td>{b.stock}</td>
              <td>
                <Link href={`/admin/edit/${b.id}`} style={{ marginRight: 10 }}>
                  ✏ Edit
                </Link>

                <button onClick={() => deleteBook(b.id)} style={{ color: "red" }}>
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
