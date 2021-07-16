import React from 'react'
import About from './About'
import Contact from './Contact'
import Experience from './Experience'
import Interests from './Interests'
import Projects from './Projects'

function Home() {
  return (
    <>
      <div id="home" className="title-card">
        <p className="name">Guy</p>
        <p className="surname">Kozlovskij</p>
        <p className="position">Full-Stack Developer</p>
        <i className="fas fa-arrow-down"></i>
      </div>
      <About />
      <div className="scroll-img-1">
      </div>
      <Projects />
      <div className="scroll-img-1"></div>
      <Experience />
      <div className="scroll-img-1"></div>
      <Interests />
      <Contact />
    </>
  )
}

export default Home