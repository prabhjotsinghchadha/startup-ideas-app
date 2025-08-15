import AuthExample from '../../components/examples/AuthExample';
import UIExample from '../../components/examples/UIExample';

export default function ReduxDemoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold">Redux Integration Demo</h1>
        <p className="text-gray-600">
          This page demonstrates the complete Redux setup with TypeScript in Next.js. All state
          management is handled through Redux with proper type safety.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Authentication State</h2>
          <AuthExample />
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold">UI State Management</h2>
          <UIExample />
        </div>
      </div>

      <div className="mt-8 rounded-lg bg-gray-50 p-6">
        <h2 className="mb-4 text-xl font-semibold">Redux DevTools</h2>
        <p className="text-gray-700">
          Open your browser&apos;s Redux DevTools extension to inspect the state changes as you
          interact with the components above. You can see all actions being dispatched and how they
          modify the application state.
        </p>
      </div>
    </div>
  );
}
