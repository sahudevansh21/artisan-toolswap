"use client";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Artisan ToolSwap</h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Connect with local makers, borrow that niche tool you need, and lend the ones you rarely use.
        </p>
        <Link href="/tools" className="bg-white text-indigo-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
          Browse Tools
        </Link>
      </section>

      {/* Features */}
      <section className="max-w-5xl w-full py-16 px-6 grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <svg className="w-12 h-12 mx-auto text-indigo-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4z" /></svg>
          <h3 className="text-xl font-semibold mb-2">Local Matching</h3>
          <p className="text-gray-600">Find makers within a few miles and arrange safe, in‑person exchanges.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <svg className="w-12 h-12 mx-auto text-indigo-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          <h3 className="text-xl font-semibold mb-2">Trust System</h3>
          <p className="text-gray-600">Ratings, verifiable IDs, and tool condition photos keep the community reliable.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <svg className="w-12 h-12 mx-auto text-indigo-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>
          <h3 className="text-xl font-semibold mb-2">Zero Fees</h3>
          <p className="text-gray-600">No commission – just a small optional donation to keep the platform running.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-indigo-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to start swapping?</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Join the community, list your tools, and discover what’s waiting just around the corner.
        </p>
        <Link href="/exchange" className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition">
          Create an Exchange
        </Link>
      </section>
    </main>
  );
}