import { getBook } from "../../lib/api";

export async function generateMetadata({ params }) {
  const book = await getBook(params.slug);

  return {
    title: book.title,
    description: book.description?.slice(0, 150),
    openGraph: {
      title: book.title,
      description: book.description,
      images: [book.cover_url],
      type: "product",
    },
    twitter: {
      card: "summary_large_image",
      title: book.title,
      description: book.description,
      images: [book.cover_url],
    },
  };
}

export default async function ProductDetails({ params }) {
  const book = await getBook(params.slug);

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      <img
        src={book.cover_url}
        className="w-full h-auto rounded-xl shadow"
        alt={book.title}
      />

      <div>
        <h1 className="text-3xl font-bold">{book.title}</h1>
        <p className="text-gray-600 mt-2">{book.author}</p>
        <p className="text-2xl font-bold mt-4">₹{book.price}</p>

        <p className="mt-6">{book.description}</p>

        <button className="mt-8 bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
