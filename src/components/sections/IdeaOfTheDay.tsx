import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function IdeaOfTheDay() {
  return (
    <div className="lg:col-span-2">
      {/* Idea of the Day Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-light text-blue-600 mb-4">Idea of the Day</h1>
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-6">
          <button className="flex items-center space-x-1">
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          <span>Aug 15, 2025</span>
          <button className="flex items-center space-x-1">
            <span>Next Idea</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Idea Card */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-normal text-gray-800">
            Engaging Brain Exercises App for Seniors (SSSB Market)
          </CardTitle>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Mature Market
            </Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              Growing Demand
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Value Subscription
            </Badge>
            <Badge variant="secondary" className="bg-gray-100 text-gray-800">
              AI Based
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Cognitive decline affects seniors of independence, slows social isolation, and increases
            caregiver burdens. Most elderly platforms personalized brain workouts with interfaces
            specifically designed for older adults. The platform automatically adjusts difficulty
            based on performance, creating the perfect balance of challenge and achievement to keep
            seniors engaged. Caregivers receive detailed progress reports highlighting cognitive
            functions and improvements, while seniors enjoy gamified experiences that make brain
            training feel like entertainment rather than medical intervention.
          </p>

          <p className="text-gray-700 leading-relaxed">
            At $19/month for individuals and $39/month for senior living facilities, this service
            brings families, who access the SSSB elder care market with a scalable solution. The
            platform starts with core memory and attention exercises, then expands to include:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
            <li>Social features allowing seniors to compete in collaborative</li>
            <li>Progress tracking that celebrates small wins</li>
            <li>Family connection tools that bridge generations</li>
            <li>Professional content matching personal interests and history</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Growth comes through partnerships with senior living communities, geriatric care
            managers, and adult children searching for solutions to help aging parents stay sharp.
            The competitive advantage lies in the personalization engine that identifies exactly
            which cognitive areas need the most attention, delivering exercises that feel both
            engaging activities rather than clinical interventions.
          </p>

          <p className="text-gray-700 leading-relaxed">
            For implementation, build a tablet-friendly web app with large buttons, high contrast,
            and minimal distractions. Start exercises on established neuropsychology research while
            making them accessible and enjoyable. After gaining traction with individuals users,
            create a facility dashboard for senior communities to monitor group engagement.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Most elderly transforms cognitive health from a medical concern into a daily habit that
            keeps seniors connected to their families and gives caregivers confidence in their loved
            ones&apos; continued independence.
          </p>
        </CardContent>
      </Card>

      {/* Market Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">74.0K</div>
              <div className="text-green-600 text-sm font-medium">+647%</div>
              <div className="text-gray-600 text-sm mt-2">Search: Brain exercise games</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-700">Opportunity</div>
              <div className="text-2xl font-bold">9</div>
              <div className="text-sm font-medium text-gray-700">Business</div>
              <div className="text-2xl font-bold">4</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Sections */}
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Why Now?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              Emerging brain fitness and technological advancement align perfectly to launch a
              personalized brain training platform for seniors, tapping into a rapidly growing $69
              billion market by 2025 with a 23.1% CAGR, driven by the aging population cognitive
              health needs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Proof & Signals</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              Validating the demand for a personalized brain wellness app for seniors highlights
              strong empirical community interest, with significant market trends showing increased
              consumer and investing interest in cognitive health solutions. The aging population
              growing demand for accessible brain training tools demand for effective brain training
              tools.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">The Market Gap</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              Current brain training platforms either present a significant market gap in the brain
              market with space. Current solutions largely cater to English speakers, leaving a vast
              demographic underserved, particularly in rapidly aging regions like Asia and Latin
              America.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Execution Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              Launch by designing a tablet-friendly offering personalized cognitive exercises for
              seniors and their families. Focus on simplicity, large text, clear navigation.
              Facebook and YouTube ads to potentially the market. Next, expand reach through
              facility partnerships and multilingual support. There is no evidence cognitive care
              for seniors.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-8">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
          Get full analysis →
        </Button>
      </div>
    </div>
  );
}
