"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Invalid login credentials");
      return;
    }

    alert("Login successful!");
    window.location.href = "/admin";
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-5">Login</h1>

      <form onSubmit={handleLogin} className="grid gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="border rounded p-2"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          className="border rounded p-2"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="bg-black text-white py-2 rounded hover:bg-gray-800">
          Login
        </button>

        <a href="/signup" className="text-blue-600 underline">
          Create an account
        </a>
      </form>
    </div>
  );
}
