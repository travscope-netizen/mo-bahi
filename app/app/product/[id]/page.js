import getBook from "@/app/lib/getBook";

export default async function ProductPage({ params }) {
  const { id } = params;
  const book = await getBook(id);

  if (!book) {
    return (
      <div className="p-10 text-red-600 text-2xl">
        Book Not Found
      </div>
    );
  }

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold">{book.title}</h1>
      <p className="text-xl text-gray-700 mt-2">{book.author}</p>

      <img
        src={book.cover_url}
        alt={book.title}
        className="w-64 mt-6 border shadow"
      />

      <p className="mt-6 text-lg leading-relaxed">{book.description}</p>

      <p className="mt-8 text-3xl font-bold">INR {book.price}</p>
    </div>
  );
}

