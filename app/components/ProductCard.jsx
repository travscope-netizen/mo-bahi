export default function ProductCard({ book }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition border p-4 w-60">
      <img
        src={book.cover_url}
        alt={book.title}
        className="w-full h-72 object-cover rounded-lg"
      />

      <h3 className="mt-3 font-semibold text-lg">{book.title}</h3>
      <p className="text-gray-600 text-sm">{book.author}</p>
      <p className="mt-2 font-bold text-lg">₹{book.price}</p>

      <a
        href={`/product/${book.slug}`}
        className="mt-3 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        View Details
      </a>
    </div>
  );
}
