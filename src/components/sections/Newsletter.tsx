import { Button } from '@/components/ui/button';

export default function Newsletter() {
  return (
    <section className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
      <h2 className="text-3xl font-light text-blue-600 mb-4">Stay Updated</h2>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Get the latest business ideas, market insights, and entrepreneurial opportunities delivered
        to your inbox weekly.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">Subscribe</Button>
      </div>
    </section>
  );
}
