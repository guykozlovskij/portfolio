import img1 from '../../img/note-it-down.png'

function Projects() {
  return (
    <div className="projects">
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
          </div>
          <p className="project-description">A week-long paired project to build a full-stack application - a fun and simple music maker allowing users to create and share songs.
            <br />
            <br />
            The back-end included an SQL database, served using Django REST Framework to a front-end built using React.
            <br />
            <br />
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
  )
}

export default Projects