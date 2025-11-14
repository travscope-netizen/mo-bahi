import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { getBooks } from '../services/api';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(res => setBooks(res.data || []));
  }, []);

  return (
    <div>
      <h1>Featured Books</h1>
      <div style={{ display: 'flex', gap: 16 }}>
        {books.map(b => (
          <ProductCard key={b.id} book={b} />
        ))}
      </div>
    </div>
  );
}
