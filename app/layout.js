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
