import React from 'react'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'

function Home() {
  return (
    <>
      <div id="home" className="title-card">
        <p className="name">Guy</p>
        <p className="surname">Kozlovskij</p>
        <p className="position">Full-Stack Developer</p>
      </div>
      <About />
      <div className="scroll-img-1"><p>Projects</p></div>
      <Projects />
      <div className="scroll-img-1"></div>
      <Experience />
      <div className="scroll-img-3"></div>
      <div className="contact">
        <h1>Contact Here</h1>
      </div>
    </>
  )
}

export default Home