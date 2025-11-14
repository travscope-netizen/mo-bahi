import { getBooks } from "../lib/api";

export default async function SearchPage({ searchParams }) {
  const query = searchParams.q || "";
  const books = await getBooks();

  const results = books.filter((b) =>
    b.title.toLowerCase().includes(query.toLowerCase()) ||
    b.author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Search Results for "{query}"</h1>

      {results.length === 0 ? (
        <p>No matching books found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {results.map((b) => (
            <a key={b.id} href={`/product/${b.slug}`}>
              <img src={b.cover_url} className="rounded shadow" />
              <h3 className="font-semibold mt-2">{b.title}</h3>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
