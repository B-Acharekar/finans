// app/page.jsx or app/page.tsx

import Header from '../components/Header';

export default function HomePage() {
  return (
    <main>
      <Header />
      {/* Rest of your landing page content */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to Landmark</h1>
        <p className="mt-4 text-lg text-gray-600">Your trusted SaaS solution</p>
      </section>
    </main>
  );
}
