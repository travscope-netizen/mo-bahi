import Image from "next/image";

export default async function ProductPage({ params }) {
  const { id } = params; // dynamic id → b1, b2

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/books/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <h1>Product not found</h1>;
  }

  const data = await res.json();
  const book = data.data;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{book.title}</h1>
      <Image
        src={book.cover_url}
        alt={book.title}
        width={300}
        height={450}
      />
      <p><b>Author:</b> {book.author}</p>
      <p><b>Price:</b> INR {book.price}</p>
      <p><b>Description:</b> {book.description}</p>
    </div>
  );
}
