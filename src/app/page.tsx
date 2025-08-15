import Link from 'next/link';

import { Example } from '../components/atoms/Example';

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <Link href="https://nextjs.org" className="text-blue-600">
            Next.js!
          </Link>
        </h1>

        <p className="mt-3 text-2xl">
          Now with <span className="font-bold text-purple-600">Redux + TypeScript</span>{' '}
          integration!
        </p>

        <div className="mt-8 rounded-lg bg-gradient-to-r from-purple-100 to-blue-100 p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">🚀 Redux Integration Complete!</h2>
          <p className="mb-4 text-gray-700">
            Your Next.js app now includes a complete Redux setup with TypeScript, featuring
            authentication, UI state management, and user management.
          </p>
          <Link
            href="/redux-demo"
            className="inline-block rounded-lg bg-purple-600 px-6 py-3 text-white hover:bg-purple-700"
          >
            View Redux Demo →
          </Link>
        </div>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Link
            href="/redux-demo"
            className="mt-6 w-96 rounded-xl border border-purple-200 bg-purple-50 p-6 text-left hover:border-purple-400 hover:text-purple-600"
          >
            <h3 className="text-2xl font-bold">Redux Demo &rarr;</h3>
            <p className="mt-4 text-xl">See Redux state management.</p>
          </Link>

          <Link
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and its API.
            </p>
          </Link>

          <Link
            href="https://redux-toolkit.js.org/"
            className="mt-6 w-96 rounded-xl border border-red-200 bg-red-50 p-6 text-left hover:border-red-400 hover:text-red-600"
          >
            <h3 className="text-2xl font-bold">Redux Toolkit &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn more about Redux Toolkit, the modern way to write Redux logic.
            </p>
          </Link>

          <Link
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </Link>
        </div>

        <div className="mt-6">
          <Example />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
