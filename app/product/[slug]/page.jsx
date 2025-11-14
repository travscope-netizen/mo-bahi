async function getBook(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/books/${slug}`, {
    cache: "no-store",
  });

  return await res.json();
}

export default async function ProductPage({ params }) {
  const { slug } = params;
  const data = await getBook(slug);
  const book = data.data;

  return (
    <div>
      <img 
        src={book.cover_url} 
        style={{ width: "300px", borderRadius: "8px" }} 
      />
      <h1>{book.title}</h1>
      <h3>{book.author}</h3>
      <p>{book.description}</p>
      <h2>₹{book.price}</h2>
    </div>
  );
}
