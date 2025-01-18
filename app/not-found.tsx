import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-5xl font-bold text-slate-800 mb-4">404</h1>
      <p className="text-lg text-slate-600 mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
