<header className="bg-black text-white py-4 shadow">
  <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
    <a href="/" className="text-xl font-bold tracking-wide">
      Mo Bahi
    </a>

    <nav className="hidden md:flex gap-6 text-sm">
      <a href="/" className="hover:text-gray-300">Home</a>
      <a href="/categories" className="hover:text-gray-300">Categories</a>
      <a href="/admin" className="hover:text-gray-300">Admin</a>
    </nav>

    <div className="md:hidden text-white text-2xl">
      ☰
    </div>
  </div>
</header>

export const metadata = {
  title: "Mo Bahi Bookstore",
  description: "Buy new and old books online at the best price | Mo Bahi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: "sans-serif" }}>
        <header style={{ background: "#000", color: "#fff", padding: 12 }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
            <a href="/" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold", fontSize: 20 }}>
              Mo Bahi
            </a>
            <a href="/admin" style={{ color: "#fff", textDecoration: "none" }}>Admin</a>
          </div>
        </header>
        <main style={{ maxWidth: 1200, margin: "20px auto" }}>{children}</main>
      </body>
    </html>
  );
}
