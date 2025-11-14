import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBook } from '../services/api';

export default function Product(){
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(()=> {
    fetchBook(id).then(res => setBook(res.data));
  }, [id]);

  if(!book) return <div>Loading...</div>;
  return (
    <div style={{ display:'flex', gap:24 }}>
      <img src={book.cover_url || book.cover} alt={book.title} style={{ width:240 }} />
      <div>
        <h1>{book.title}</h1>
        <p>By {book.author}</p>
        <p>{book.description}</p>
        <p style={{ fontWeight:700 }}>{book.currency || 'INR'} {book.price}</p>
        <button onClick={() => {
          const cart = JSON.parse(localStorage.getItem('mb_cart')||'[]');
          cart.push({ id: book.id, title: book.title, price: book.price, qty:1 });
          localStorage.setItem('mb_cart', JSON.stringify(cart));
          alert('Added to cart');
        }}>Add to cart</button>
      </div>
    </div>
  );
}
