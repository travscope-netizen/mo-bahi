export default async function ProductPage({ params }) {
  const { id } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/books/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <h1>Product Not Found</h1>;
  }

  const json = await res.json();
  const book = json.data;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{book.title}</h1>
      <img
        src={book.cover_url}
        alt={book.title}
        style={{ width: "200px", borderRadius: "8px" }}
      />
      <p><b>Author:</b> {book.author}</p>
      <p><b>Price:</b> INR {book.price}</p>
      <p><b>Description:</b> {book.description}</p>
    </div>
  );
}
