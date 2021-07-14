import gaLogo from '../../img/logos/ga-logo.png'
import hfsLogo from '../../img/logos/hfs-logo.jpeg'
import piLogo from '../../img/logos/premierinn-logo.png'

function Experience() {
  return (
    <div id="experience" className="experience">
      <div className="experience-content">
        <img className="logo" src={gaLogo} alt="general assembly logo" />
        <div className="text">
          <h1>General Assembly</h1>
          <h2>Software Engineering Immersive Student</h2>
          <h3>Mar 2021 - July 2021</h3>
          <p>Full-time 13-week immersive coding bootcamp for learning in-demand languages, frameworks and libraries, consisting of daily standups, lectures, workshops, and homework.</p>
        </div>
      </div>
      <div id="experience-scroll-image" className="scroll-img-2"></div>
      <div className="experience-content">
        <img className="logo" id="hfs-logo" src={hfsLogo} alt="homes for students logo" />
        <div className="text">
          <h1>Homes for Students</h1>
          <h2>Senior Customer Service Advisor</h2>
          <h3>Nov 2020 - Mar 2021</h3>
          <p>Leading the team and driving performance of the properties KPIs whilst delivering an outstanding student experience across multiple sites.
          </p>
          <div className="separator"></div>
          <h2>Customer Service Advisor</h2>
          <h3>Aug 2019 - Nov 2020</h3>
          <p>Managing day to day responsibilities of a student accommodation such as sales, management of the property, viewings, debt collection, health and safety compliance, social media presence and student events.</p>
        </div>
      </div>
      <div id="experience-scroll-image" className="scroll-img-2"></div>
      <div className="experience-content">
        <img className="logo" src={piLogo} alt="premier inn logo" />
        <div className="text">
          <h1>Premier Inn</h1>
          <h2>Duty Manager</h2>
          <h3>Jul 2017 - Aug 2019</h3>
          <p>Working as a Team Leader ensuring smooth and efficient work across all departments, and training teams in accordance with company brand standard.
          </p>
          <div className="separator"></div>
          <h2>Team Member</h2>
          <h3>Jun 2015 - Aug 2017</h3>
          <p>Reception and restaurant duties: providing a brilliant and warm experience for the guests throughout their stay, responding to requirements and complaints in a professional and result driven manner. Ensuring excellent dining and breakfast experience, managing drinks stock, leading the team and setting up for successful and efficient shifts.</p>
        </div>
      </div>
    </div>
  )
}

export default Experience