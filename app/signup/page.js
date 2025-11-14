"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e) {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Account created! Please login.");
    window.location.href = "/login";
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-5">Sign Up</h1>

      <form onSubmit={handleSignup} className="grid gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border rounded p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border rounded p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="bg-black text-white py-2 rounded hover:bg-gray-800">
          Sign Up
        </button>

        <a href="/login" className="text-blue-600 underline">
          Already have an account? Login
        </a>
      </form>
    </div>
  );
}
