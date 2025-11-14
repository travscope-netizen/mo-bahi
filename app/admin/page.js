import Link from "next/link";

async function getBooks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/books`, { cache: "no-store" });
  const json = await res.json();
  return json.data || [];
}

export default async function AdminPage() {
  const books = await getBooks();

  return (
    <div>
      <h1>Admin — Manage Books</h1>

      <Link
        href="/admin/add"
        style={{
          padding: "8px 12px",
          background: "black",
          color: "white",
          borderRadius: 5,
        }}
      >
        + Add New Book
      </Link>

      <table border="1" cellPadding="10" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Slug</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b.id}>
              <td>{b.title}</td>
              <td>{b.currency} {b.price}</td>
              <td>{b.slug}</td>
              <td>
                <Link href={`/admin/edit/${b.id}`}>Edit</Link> |{" "}
                <Link href={`/admin/delete/${b.id}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
