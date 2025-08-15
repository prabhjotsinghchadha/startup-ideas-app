import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Sidebar() {
  return (
    <div className="space-y-6">
      {/* Business Fit */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Business Fit</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Executive Difficulty</span>
            <span className="text-blue-600 font-medium">$$$</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Execution Difficulty</span>
            <span className="text-blue-600 font-medium">$$$</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Go-to-Market</span>
            <span className="text-blue-600 font-medium">$$$$</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Right for You?</span>
            <Button variant="outline" size="sm">
              Find Out →
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Build This Idea */}
      <Card className="bg-purple-50 border-purple-200">
        <CardHeader>
          <CardTitle className="text-lg text-purple-800">Build This Idea</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-purple-700 mb-4">
            Get the full business plan including the complete business plan, market research,
            competitive analysis, and more.
          </p>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            Get Started
          </Button>
        </CardContent>
      </Card>

      {/* Community Signals */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Community Signals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Reddit</span>
            <span className="text-blue-600 font-medium">91.1k</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Facebook</span>
            <span className="text-blue-600 font-medium">71.8k</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">YouTube</span>
            <span className="text-blue-600 font-medium">77.1k</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Other</span>
            <span className="text-blue-600 font-medium">81.1k</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
