import { Header, Footer, VideoBanner } from '@/components/layout';
import {
  IdeaOfTheDay,
  Sidebar,
  IdeaDatabase,
  Newsletter,
  Testimonials
} from '@/components/sections';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <VideoBanner />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <IdeaOfTheDay />
          <Sidebar />
        </div>

        <IdeaDatabase />
        <Newsletter />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
