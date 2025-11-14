export const metadata = {
  metadataBase: new URL("https://mo-bahi.vercel.app"),
  title: {
    default: "Mo Bahi – Online Bookstore in Odisha",
    template: "%s | Mo Bahi"
  },
  <form action="/search" method="GET" className="hidden md:block">
  <input
    type="text"
    name="q"
    placeholder="Search books..."
    className="px-3 py-2 rounded border text-black"
  />
</form>

  description: "Buy new and used books online at the best prices. Fast delivery across India.",
  openGraph: {
    title: "Mo Bahi – Online Bookstore",
    description: "Buy new and used books online at the best prices.",
    url: "https://mo-bahi.vercel.app",
    siteName: "Mo Bahi",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Mo Bahi Bookstore"
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mobahi",
    creator: "@mobahi",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
  <CartProvider>
    {children}
  </CartProvider>
</body>

    </html>
  );
}
