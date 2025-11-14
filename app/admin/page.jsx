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
    if (!confirm("Are you sure you want to delete this book?")) return;

    await fetch(`${API}/api/books/${id}`, { method: "DELETE" });
    loadBooks();
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <h1 style={{ fontSize: "26px", fontWeight: "bold" }}>📚 All Books</h1>

        <Link
          href="/admin/add-book"
          style={{
            padding: "10px 16px",
            background: "green",
            color: "white",
            borderRadius: "5px",
          }}
        >
          ➕ Add New Book
        </Link>
      </div>

      <table
        style={{
          width: "100%",
          background: "white",
          borderCollapse: "collapse",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <thead style={{ background: "#222", color: "white" }}>
          <tr>
            <th style={th}>Title</th>
            <th style={th}>Author</th>
            <th style={th}>Price</th>
            <th style={th}>Stock</th>
            <th style={th}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map((b, i) => (
            <tr
              key={b.id}
              style={{
                background: i % 2 === 0 ? "#fafafa" : "white",
                borderBottom: "1px solid #eee",
              }}
            >
              <td style={td}>{b.title}</td>
              <td style={td}>{b.author}</td>
              <td style={td}>₹{b.price}</td>
              <td style={td}>{b.stock}</td>

              <td style={td}>
                <Link
                  href={`/admin/edit-book/${b.slug}`}
                  style={{
                    padding: "6px 10px",
                    background: "#0070f3",
                    color: "white",
                    marginRight: "8px",
                    borderRadius: "4px",
                  }}
                >
                  ✏ Edit
                </Link>

                <button
                  onClick={() => deleteBook(b.id)}
                  style={{
                    padding: "6px 10px",
                    background: "red",
                    color: "white",
                    borderRadius: "4px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
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

const th = {
  padding: "14px",
  textAlign: "left",
  fontSize: "14px",
};

const td = {
  padding: "12px",
  fontSize: "14px",
};
