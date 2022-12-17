import Container from '@mui/material/Container'

import NavBar from '../components/navbar'
import Intro from '../components/intro'
import About from '../components/about'
import Experience from '../components/experience'
import Project from '../components/project'
import Contact from "../components/contact"

export default function Home() {
  return (
    <>
      <NavBar />
      <Intro />
      <hr />
      <About />
      <hr />
      <Experience />
      <hr />
      <Project />
      <hr />
      <Contact />
    </>
  )
}
