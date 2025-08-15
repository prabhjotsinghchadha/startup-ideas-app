import { TrendingUp, Users, DollarSign } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function IdeaDatabase() {
  return (
    <section className="mt-16 text-center">
      <h2 className="text-4xl font-light text-blue-600 mb-4">The Idea Database</h2>
      <p className="text-gray-600 mb-12">
        Dive into deep research and analysis on 400+ business ideas
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="bg-purple-100 rounded-lg p-4 mb-4">
              <TrendingUp className="w-8 h-8 text-purple-600 mx-auto" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Task 1: Corporate Event Bridge (Skills Program)
            </h3>
            <p className="text-sm text-gray-600">
              Streamlined corporate planning through targeted business development and enhanced team
              building experiences.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="bg-purple-100 rounded-lg p-4 mb-4">
              <Users className="w-8 h-8 text-purple-600 mx-auto" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              NextGen Idea Generation Service (New Business)
            </h3>
            <p className="text-sm text-gray-600">
              Next-generation business planning service and buyer acquisition through innovative
              market research.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="bg-purple-100 rounded-lg p-4 mb-4">
              <DollarSign className="w-8 h-8 text-purple-600 mx-auto" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              SaaS-based startup The Cost Control For...
            </h3>
            <p className="text-sm text-gray-600">
              The latest from business and economy by independent business owners and startup
              founders.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
          Browse All Ideas →
        </Button>
      </div>
    </section>
  );
}
