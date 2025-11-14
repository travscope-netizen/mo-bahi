export default function StructuredData({ book }) {
  const data = {
    "@context": "https://schema.org/",
    "@type": "Book",
    name: book.title,
    author: book.author,
    description: book.description,
    image: book.cover_url,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: book.price,
      availability: "https://schema.org/InStock",
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
