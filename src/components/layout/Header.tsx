import { BRANDING } from '@/config/branding';
import React from 'react';

import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">{BRANDING.COMPANY_SHORT}</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">{BRANDING.COMPANY_DOMAIN}</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Browse Ideas
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Tools
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              More
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
