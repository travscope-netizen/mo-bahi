"use client";

import { useState } from "react";
import BookForm from "../BookForm";
import { createClient } from "@supabase/supabase-js";

export default function AddBookPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const [message, setMessage] = useState("");

  async function handleSubmit(form) {
    const { data, error } = await supabase.from("books").insert([form]);

    if (error) {
      setMessage("❌ Error: " + error.message);
    } else {
      setMessage("✅ Book added successfully!");
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Add New Book</h1>
      <BookForm submitText="Add Book" onSubmit={handleSubmit} />
      <p>{message}</p>
    </div>
  );
}
