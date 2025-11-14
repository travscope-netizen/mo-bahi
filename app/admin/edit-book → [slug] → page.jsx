"use client";

import { useEffect, useState } from "react";
import BookForm from "../../BookForm";
import { createClient } from "@supabase/supabase-js";

export default function EditBookPage({ params }) {
  const { slug } = params;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const [book, setBook] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchBook() {
      const { data, error } = await supabase
        .from("books")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) {
        setMessage("❌ Error loading book");
      } else {
        setBook(data);
      }
    }
    fetchBook();
  }, [slug]);

  async function handleSubmit(form) {
    const { error } = await supabase
      .from("books")
      .update(form)
      .eq("slug", slug);

    if (error) {
      setMessage("❌ Error: " + error.message);
    } else {
      setMessage("✅ Book updated successfully!");
    }
  }

  if (!book) return <p>Loading...</p>;

  return (
    <div style={{ padding: 40 }}>
      <h1>Edit Book</h1>
      <BookForm submitText="Update Book" initialValues={book} onSubmit={handleSubmit} />
      <p>{message}</p>
    </div>
  );
}
