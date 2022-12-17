import Container from '@mui/material/Container'

import NavBar from '../components/navbar'
import Intro from '../components/intro/intro'
import About from '../components/about/about'
import Experience from '../components/experience/experience'
import Project from '../components/project/project'
import Contact from "../components/contact/contact"

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
