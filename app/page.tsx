import Landing from '@/components/landing'
import About from '@/components/about'

export default function Home() {
  return (
    <main >
      <div className="background-dark">
        <Landing />
      </div>
      <div className="background">
        <About />
      </div>
    </main>
  )
}
