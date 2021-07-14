import img1 from '../../img/note-it-down.png'
import img2 from '../../img/cloudify-mac.png'
import img3 from '../../img/every-day-holiday.png'
import img4 from '../../img/cosmos-mac.png'

function Projects() {
  return (
    <section className="project-main">
      <div id="projects" className="projects">
        <section className="project-section">
          <div className="project-img">
            <img src={img1} alt="project-image" />
          </div>
          <section className="about-project">
            <h1 className="project-name">note-it-down</h1>
            <h2 className="project-grouping">Pair Project | One Week</h2>
            <div className="project-devicons">
              <div className="project-devicon">
                <i className="devicon-javascript-plain"></i>
              </div>
              <div className="project-devicon">
                <i className="devicon-react-original"></i>
              </div>
              <div className="project-devicon">
                <i className="devicon-html5-plain"></i>
              </div>
              <div className="project-devicon">
                <i className="devicon-css3-plain"></i>
              </div>
              <div className="project-devicon">
                <i className="devicon-sass-original"></i>
              </div>
              <div className="project-devicon">
                <i className="devicon-python-plain"></i>
              </div>
              <div className="project-devicon">
                <i className="devicon-django-plain"></i>
              </div>
              <div className="project-devicon">
                <i className="devicon-postgresql-plain"></i>
              </div>
              <div className="project-devicon">
                <i className="devicon-nodejs-plain"></i>
              </div>
            </div>
            <p className="project-description">A week-long paired project to build a full-stack application - a fun and simple music maker allowing users to create and share songs.
              The back-end included an SQL database, served using Django REST Framework to a front-end built using React.
              I built most of the back-end using Python, as well as the index page and song view in the front-end and took the lead in styling the project.</p>
            <div className="project-links">
              <a className="button" target="_blank" href="https://note-it-down-app.netlify.app/" rel="noreferrer">
                <i className="fas fa-link"></i>
                <span>Open Project</span>
              </a>
              <a className="button" target="_blank" href="https://github.com/guykozlovskij/project-4-server" rel="noreferrer">
                <i className="devicon-github-original"></i>
                <span>View  on Github</span>
              </a>
            </div>
          </section>
        </section>
      </div>
      <div className="scroll-img-2"></div>
      <div className="projects">
        <section className="project-section">
          <div className="project-img">
            <img src={img2} alt="project-image" />
          </div>
          <section className="about-project">
            <h1 className="project-name">Cloudify</h1>
            <h2 className="project-grouping">Group Project | One Week</h2>
            <div className="project-devicons">
              <div className="project-devicon">
                <i className="devicon-javascript-plain"></i>
              </div>
              <div className="project-devicon">
                <i className="devicon-react-original"></i>
              </div>
              <div className="project-devicon">
                <i className="devicon-html5-plain"></i>
              </div>
              <div className="project-devicon">
                <i className="devicon-css3-plain"></i>
              </div>
              <div className="project-devicon">
                <i className="devicon-sass-original"></i>
              </div>
              <div className="project-devicon">
                <i className="devicon-express-original"></i>
              </div>
              <div className="project-devicon">
                <i className="devicon-mongodb-plain"></i>
              </div>
              <div className="project-devicon">
                <i className="devicon-nodejs-plain"></i>
              </div>
            </div>
            <p className="project-description">A week-long project, working in a team of 3, to build a full-stack application.
              We used Express to create our API and serve our data from a Mongo database, consumed with a React front-end. We used Git to work collaboratively to build a Spotify/Soundcloud-inspired application.
              I worked on the back-end features including models, controllers, error handling, and comments and song-list functionality in the front-end.
            </p>
            <div className="project-links">
              <a className="button" target="_blank" href="https://cloudify-player.netlify.app/" rel="noreferrer">
                <i className="fas fa-link"></i>
                <span>Open Project</span>
              </a>
              <a className="button" target="_blank" href="https://github.com/guykozlovskij/project-3-server" rel="noreferrer">
                <i className="devicon-github-original"></i>
                <span>View  on Github</span>
              </a>
            </div>
          </section>
        </section>
      </div>
      <div className="scroll-img-2"></div>
      <div className="projects">
        <section className="project-section">
          <div className="project-img">
            <img src={img3} alt="project-image" />
          </div>
          <section className="about-project">
            <h1 className="project-name">Everyday Holiday</h1>
            <h2 className="project-grouping">Pair Project | Two Days</h2>
            <div className="project-devicons">
              <div className="project-devicon">
                <i className="devicon-javascript-plain"></i>
              </div>
              <div className="project-devicon">
                <i className="devicon-react-original"></i>
              </div>
              <div className="project-devicon">
                <i className="devicon-html5-plain"></i>
              </div>
              <div className="project-devicon">
                <i className="devicon-css3-plain"></i>
              </div>
              <div className="project-devicon">
                <i className="devicon-nodejs-plain"></i>
              </div>
            </div>
            <p className="project-description">A two-day hackathon paired project to create a React app that consumes a public API and has several components, both functional and classical. We chose the “Calendarific API” as our data source and designed it with SASS. We build a minimalist mobile-friendly app that displays all local holidays for all countries.
            </p>
            <div className="project-links">
              <a className="button" target="_blank" href="https://guykozlovskij-project-2.netlify.app/" rel="noreferrer">
                <i className="fas fa-link"></i>
                <span>Open Project</span>
              </a>
              <a className="button" target="_blank" href="https://github.com/guykozlovskij/project-2" rel="noreferrer">
                <i className="devicon-github-original"></i>
                <span>View  on Github</span>
              </a>
            </div>
          </section>
        </section>
      </div>
      <div className="scroll-img-2"></div>
      <div className="projects">
        <section className="project-section">
          <div className="project-img">
            <img src={img4} alt="project-image" />
          </div>
          <section className="about-project">
            <h1 className="project-name">Cosmos Intruders</h1>
            <h2 className="project-grouping">Solo Project | One week</h2>
            <div className="project-devicons">
              <div className="project-devicon">
                <i className="devicon-javascript-plain"></i>
              </div>
              <div className="project-devicon">
                <i className="devicon-html5-plain"></i>
              </div>
              <div className="project-devicon">
                <i className="devicon-css3-plain"></i>
              </div>
            </div>
            <p className="project-description">A week-long solo project to create a grid-based game to be rendered in the browser, using ‘vanilla’ JavaScript, HTML, and CSS. I created a clone of a classic Atari game “Space Invaders”.
            </p>
            <div className="project-links">
              <a className="button" target="_blank" href="https://guykozlovskij.github.io/project-1/" rel="noreferrer">
                <i className="fas fa-link"></i>
                <span>Open Project</span>
              </a>
              <a className="button" target="_blank" href="https://github.com/guykozlovskij/project-1" rel="noreferrer">
                <i className="devicon-github-original"></i>
                <span>View  on Github</span>
              </a>
            </div>
          </section>
        </section>
      </div>
    </section>
  )
}

export default Projects