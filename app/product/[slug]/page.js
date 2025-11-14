import { getBook } from "../../lib/api";

export default async function ProductDetails({ params }) {
  const book = await getBook(params.slug);

  if (!book) {
    return <h2>Book Not Found</h2>;
  }

  return (
    <div>
      <img src={book.cover_url} alt={book.title} style={{ width: 300 }} />
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p style={{ fontWeight: "bold" }}>{book.currency} {book.price}</p>
    </div>
  );
}
