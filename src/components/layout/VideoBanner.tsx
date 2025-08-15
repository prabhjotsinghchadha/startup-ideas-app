import { Play } from 'lucide-react';

export default function VideoBanner() {
  return (
    <div className="bg-gray-900 text-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-3">
          <Play className="w-5 h-5" />
          <span className="text-sm">
            Try 15 different fact-check and feature idea from business
          </span>
          <div className="bg-white text-black px-2 py-1 rounded text-xs font-medium">0</div>
        </div>
      </div>
    </div>
  );
}
