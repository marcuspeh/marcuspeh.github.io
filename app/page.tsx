import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {Suspense} from 'react';

import {About} from '@/components/about';
import {Landing} from '@/components/landing';
import {Skills} from '@/components/skills';
import {Experience} from '@/components/experience';
import {Footer} from '@/components/footer';
import {Contact} from '@/components/contact';
import {Project} from '@/components/project';
import {NavBar} from '@/components/navbar';

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="background-dark" id="landing">
        <Landing />
      </div>
        <Suspense>
        <div className="background" id="about">
          <About />
        </div>
        <div className="background-dark" id="skills">
          <Skills />
        </div>
        <div className="background" id="experience">
          <Experience />
        </div>
        <div className="background-dark" id="projects">
          <Project />
        </div>
        <div className="background" id="contact">
          <Contact />
        </div>
        <div className="background" id="footer">
          <Footer />
        </div>
      </Suspense>
     
      <Analytics />
      <SpeedInsights />
    </main>
  );
}
