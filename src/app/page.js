
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold">Welcome to the Doctor Listing App!</h1>
        <p className="mt-4 text-lg text-gray-600">
          Easily find and connect with top medical professionals in your area.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-medium mb-2">Comprehensive Listings</h3>
            <p>Access a wide range of doctors across various specialties.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-medium mb-2">Advanced Filtering</h3>
            <p>Filter doctors by city, specialty, and more to find your ideal match.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-medium mb-2">Detailed Profiles</h3>
            <p>View comprehensive profiles with contact information and specialties.</p>
          </div>
        </div>
      </section>

      <section className="text-center mt-12">
        <Link href="/doctors">
          <button className="btn btn-primary text-white px-6 py-3 rounded-md text-lg">
            Explore Doctors
          </button>
        </Link>
      </section>
    </div>
  );
}
