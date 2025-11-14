export default function ProductCard({ book }) {
  return (
    <div style={{ 
      width: "250px",
      border: "1px solid #ddd",
      padding: "15px",
      borderRadius: "8px"
    }}>
      <img 
        src={book.cover_url} 
        alt={book.title} 
        style={{ width: "100%", borderRadius: "6px" }}
      />

      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p><b>₹{book.price}</b></p>

      <a href={`/product/${book.slug}`}>View</a>
    </div>
  );
}
