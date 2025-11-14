const API_BASE = import.meta.env.VITE_API_BASE;

export async function getBooks() {
  const response = await fetch(`${API_BASE}/books`);
  if (!response.ok) {
    console.error("Failed to fetch books:", response.statusText);
    return [];
  }
  const data = await response.json();
  return data.data;  // backend sends { data: [...] }
}

export async function getBook(slug) {
  const response = await fetch(`${API_BASE}/books/${slug}`);
  const data = await response.json();
  return data.data;
}
