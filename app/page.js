import ProductCard from "./components/ProductCard";
import { getBooks } from "./lib/api";

export default async function HomePage() {
  const books = await getBooks();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Featured Books</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((b) => (
          <ProductCard key={b.id} book={b} />
        ))}
      </div>
    </div>
  );
}
