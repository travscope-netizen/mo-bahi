export default function ProductCard({ book }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 16, width: 250 }}>
      <img
        src={book.cover_url}
        alt={book.title}
        style={{ width: "100%", height: "auto" }}
      />
      <h3>{book.title}</h3>
      <p style={{ margin: 0 }}>{book.author}</p>
      <p style={{ fontWeight: "bold" }}>{book.currency} {book.price}</p>

      <a href={`/product/${book.slug}`} style={{ color: "blue" }}>
        View
      </a>
    </div>
  );
}
