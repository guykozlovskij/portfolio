function Nav() {
  return (
    <div className="navigation-bar">
      <div className="home">
        <p><a href="#home"><span className="full-name">Guy Kozlovskij</span></a></p>
        <p><a href="#home"><span className="short-name">GK</span></a></p>
      </div>
      <ul>
        <li><a href="#about">about</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#interests">interests</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </div>
  )
}

export default Nav