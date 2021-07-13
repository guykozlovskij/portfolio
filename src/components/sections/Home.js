import React from 'react'
import About from './About'
import Projects from './Projects'

function Home() {
  return (
    <>
      <div className="title-card">
        <p className="name">Guy</p>
        <p className="surname">Kozlovskij</p>
        <p className="position">Full-Stack Developer</p>
      </div>
      <About />
      <div className="scroll-img-1"></div>
      <Projects />
      <div className="scroll-img-2"></div>
      <div className="experience">
        <h1>Experience Here</h1>
      </div>
      <div className="scroll-img-3"></div>
      <div className="contact">
        <h1>Contact Here</h1>
      </div>
    </>
  )
}

export default Home