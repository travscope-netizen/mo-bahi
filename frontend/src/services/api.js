const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

export async function fetchBooks(){
  const res = await fetch(API_BASE + '/api/books');
  return res.json();
}

export async function fetchBook(id){
  const res = await fetch(API_BASE + '/api/books/' + id);
  return res.json();
}
