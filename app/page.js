import ProductCard from "./components/ProductCard";
import { getBooks } from "./lib/api";

export default async function HomePage() {
  const books = await getBooks();

  return (
    <div>
      <h1>Featured Books</h1>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {books.map((b) => (
          <ProductCard key={b.id} book={b} />
        ))}
      </div>
    </div>
  );
}
