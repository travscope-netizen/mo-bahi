export async function getBooks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/books`, { cache: "no-store" });
  const json = await res.json();
  return json.data || [];
}

export async function getBook(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/books/${slug}`, { cache: "no-store" });
  const json = await res.json();
  return json.data;
}
