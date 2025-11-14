export default async function DeleteBook({ params }) {
  const { id } = params;

  await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/admin/books/${id}`, {
    method: "DELETE",
  });

  return (
    <div>
      <h1>Book Deleted</h1>
      <a href="/admin">Go Back</a>
    </div>
  );
}
