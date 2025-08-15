import { BRANDING } from '@/config/branding';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';

export default function Testimonials() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-light text-blue-600 text-center mb-12">
        What Entrepreneurs Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardContent className="p-6">
            <p className="text-gray-700 mb-4 italic">
              {BRANDING.COMPANY_NAME} helped me discover the perfect niche for my startup. The
              market research is incredibly detailed.
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                S
              </div>
              <div>
                <div className="font-semibold text-gray-800">Sarah Chen</div>
                <div className="text-sm text-gray-600">Founder, TechStart</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <p className="text-gray-700 mb-4 italic">
              The daily ideas keep me inspired and the analysis helps me validate concepts before
              investing time.
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                M
              </div>
              <div>
                <div className="font-semibold text-gray-800">Mike Rodriguez</div>
                <div className="text-sm text-gray-600">Serial Entrepreneur</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <p className="text-gray-700 mb-4 italic">
              As an investor, I use {BRANDING.COMPANY_NAME} to spot emerging trends and evaluate
              market opportunities.
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                A
              </div>
              <div>
                <div className="font-semibold text-gray-800">Alex Thompson</div>
                <div className="text-sm text-gray-600">Angel Investor</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
