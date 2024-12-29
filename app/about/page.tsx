import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-lg text-gray-600 max-w-2xl text-center">
        Welcome to our platform! Our mission is to create a seamless and engaging experience for all our users. 
        We strive to deliver high-quality services tailored to your needs. 
        Thank you for being part of our journey!
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
