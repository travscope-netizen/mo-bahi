<h2 className="text-xl font-bold mt-10 mb-4">Browse by Category</h2>

<div className="flex gap-3 flex-wrap mb-10">
  {["General", "Fiction", "Non-Fiction", "Kids", "School", "College", "Exam Prep", "Used Books"].map((cat) => (
    <a
      key={cat}
      href={`/category/${cat}`}
      className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
    >
      {cat}
    </a>
  ))}
</div>

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
