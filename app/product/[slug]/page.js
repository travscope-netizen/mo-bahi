"use client";
import { useCart } from "../../context/CartContext";

export default function SocialShare({ book }) {
  const pageUrl = encodeURIComponent(`https://mo-bahi.vercel.app/product/${book.slug}`);
  const text = encodeURIComponent(`${book.title} – ₹${book.price}. Check it out on Mo Bahi!`);

  const whatsapp = `https://wa.me/?text=${text}%20${pageUrl}`;
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
  const twitter = `https://twitter.com/intent/tweet?text=${text}&url=${pageUrl}`;
  const telegram = `https://t.me/share/url?url=${pageUrl}&text=${text}`;

  const buttonStyle =
    "px-4 py-2 rounded-lg text-white text-sm font-semibold hover:opacity-90";

  return (
    <div className="mt-10">
      <h3 className="text-lg font-bold mb-3">Share this book</h3>

      <div className="flex gap-3 flex-wrap">

        <a href={whatsapp} target="_blank" className={`${buttonStyle} bg-green-600`}>
          WhatsApp
        </a>

        <a href={facebook} target="_blank" className={`${buttonStyle} bg-blue-600`}>
          Facebook
        </a>

        <a href={twitter} target="_blank" className={`${buttonStyle} bg-sky-500`}>
          Twitter (X)
        </a>

        <a href={telegram} target="_blank" className={`${buttonStyle} bg-cyan-600`}>
          Telegram
        </a>

        <button
          className={`${buttonStyle} bg-gray-700`}
          onClick={() => navigator.clipboard.writeText(`https://mo-bahi.vercel.app/product/${book.slug}`)}
        >
          Copy Link
        </button>

      </div>
    </div>
  );
}

import { getBook } from "../../lib/api";
import StructuredData from "./StructuredData";

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
        <StructuredData book={book} />
        <button
  onClick={() => addToCart(book)}
  className="mt-8 bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
>
  Add to Cart
</button>

    </div>
  );
}
