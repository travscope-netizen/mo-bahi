import ProductCard from "./ProductCard";

async function getBooks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/books`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data.data || [];
}

export default async function ProductList() {
  const books = await getBooks();

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {books.map((book) => (
        <ProductCard key={book.id} book={book} />
      ))}
    </div>
  );
}
