import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'Artisan ToolSwap',
  description: 'Borrow and lend niche tools with makers in your neighborhood.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.3/dist/tailwind.min.css" rel="stylesheet" />
      </Head>
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}