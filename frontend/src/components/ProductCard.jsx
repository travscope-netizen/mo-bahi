import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ book }){
  return (
    <div style={{ border:'1px solid #ddd', padding:12, width:220 }}>
      <img src={book.cover_url || book.cover} alt={book.title} style={{ width:'100%', height: 'auto' }} />
      <h3>{book.title}</h3>
      <p style={{ margin: 0 }}>{book.author}</p>
      <p style={{ fontWeight:700 }}>{book.currency || 'INR'} {book.price}</p>
      <Link to={`/product/${book.id}`}>View</Link>
    </div>
  );
}
