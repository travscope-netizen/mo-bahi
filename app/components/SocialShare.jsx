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
