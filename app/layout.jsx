export const metadata = {
  title: "Mo Bahi — Online Bookstore",
  description: "Buy new and used books at best prices. Odisha's trusted online bookstore.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <header style={{
          background: "#000",
          color: "#fff",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "18px"
        }}>
          <a href="/" style={{ color: "#fff", textDecoration: "none" }}>Mo Bahi</a>
          <a href="/admin" style={{ color: "#fff", textDecoration: "none" }}>Admin</a>
        </header>

        <main style={{ padding: "30px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
