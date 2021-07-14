import profileImage from '../../img/profile.jpeg'

function Contact() {
  return (
    <div id="contact" className="contact">
      <p>Contact Me</p>
      <img src={profileImage} alt="profile image"></img>
      <div className="contact-links">
        <a href="mailto: gajus.kozlovskij@gmail.com"><i className="fas fa-envelope"></i>Email</a>
        <a target="_blank" href="https://github.com/guykozlovskij" rel="noreferrer"><i className="devicon-github-original"></i>GitHub</a>
        <a target="_blank" href="https://www.linkedin.com/in/guy-kozlovskij/" rel="noreferrer"><i className="devicon-linkedin-plain"></i>LinkedIn</a>
      </div>
    </div>
  )
}

export default Contact