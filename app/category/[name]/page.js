import { getBooks } from "../../lib/api";

export async function generateMetadata({ params }) {
  return {
    title: `${params.name} Books`,
    description: `Browse ${params.name} books available on Mo Bahi.`,
  };
}

export default async function CategoryPage({ params }) {
  const { name } = params;
  const books = await getBooks();
  const filtered = books.filter(b => b.category.toLowerCase() === name.toLowerCase());

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Category: {name}</h1>

      {filtered.length === 0 ? (
        <p>No books found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((b) => (
            <a key={b.id} href={`/product/${b.slug}`} className="block">
              <img src={b.cover_url} className="rounded shadow" />
              <h3 className="mt-2 font-semibold">{b.title}</h3>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
