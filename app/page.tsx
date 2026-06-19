import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';

import {Navbar} from '@/components/navbar';
import {Footer} from '@/components/footer';
import {Hero} from '@/components/sections/Hero';
import {SelectedWork} from '@/components/sections/SelectedWork';
import {FeaturedProjects} from '@/components/sections/FeaturedProjects';
import {CurrentlyBuilding} from '@/components/sections/CurrentlyBuilding';
import {About} from '@/components/sections/About';
import {Contact} from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <SelectedWork />
      <FeaturedProjects />
      <CurrentlyBuilding />
      <About />
      <Contact />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </main>
  );
}
