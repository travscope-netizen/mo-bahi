export default function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          background: "#111",
          color: "white",
          padding: "20px",
        }}
      >
        <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>Admin Panel</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <a href="/admin" style={{ color: "white" }}>📘 All Books</a>
          <a href="/admin/add-book" style={{ color: "white" }}>➕ Add Book</a>
        </nav>
      </aside>

      {/* Content */}
      <main style={{ flexGrow: 1, background: "#f8f8f8", padding: "30px" }}>
        {children}
      </main>
    </div>
  );
}
