import Landing from '@/components/landing'
import About from '@/components/about'
import Skills from '@/components/skills'
import Experience from '@/components/experience'

export default function Home() {
  return (
    <main >
      <div className="background-dark">
        <Landing />
      </div>
      <div className="background">
        <About />
      </div>
      <div className="background-dark">
        <Skills />
      </div>
      <div className="background">
        <Experience />
      </div>
    </main>
  )
}
