export default function OrderSuccess() {
  return (
    <div className="max-w-xl mx-auto mt-20 p-6 bg-white shadow text-center">
      <h1 className="text-3xl font-bold text-green-600">Order Placed!</h1>
      <p className="mt-4">Thank you for your order. We will contact you soon.</p>

      <a
        href="/"
        className="mt-6 inline-block bg-black text-white px-6 py-3 rounded"
      >
        Back to Home
      </a>
    </div>
  );
}
