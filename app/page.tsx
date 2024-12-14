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
      <section className="background-dark" id="landing">
        <Landing />
      </section>
      <Suspense>
        <section className="background" id="about">
          <About />
        </section>
        <section className="background-dark" id="skills">
          <Skills />
        </section>
        <section className="background" id="experience">
          <Experience />
        </section>
        <section className="background-dark" id="projects">
          <Project />
        </section>
        <section className="background" id="contact">
          <Contact />
        </section>
        <section className="background-dark" id="footer">
          <Footer />
        </section>
      </Suspense>
      <Analytics />
      <SpeedInsights />
    </main>
  );
}
