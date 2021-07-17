import React from 'react'
import './portfolio.scss';

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Web Projects</h2>

      <div className="container">
        <div className="project">
          <a href="https://halaatowaqiat.netlify.app/">
            <div className="item">
              <img src="https://thumbs.gfycat.com/AlarmingFaintFinwhale-size_restricted.gif" alt="halat" height="150" ></img>
              <h3>Halaat o Waqiat</h3>
            </div>
          </a>
        </div>
        <div className="project">
          <a href="https://github.com/Samad-Ullah/Amazon-Clone">
            <div className="item">
              <img src="https://i.gifer.com/iCp.gif" alt="halat"></img>
              <h3>Amazon Clone</h3>
            </div>
          </a>
        </div>
        <div className="project">
          <a href="https://github.com/Samad-Ullah/Online_Quiz_Application">
            <div className="item">
              <img src="https://i.pinimg.com/originals/c9/ff/af/c9ffaff3f15bd19379a360edb33080d5.gif" alt="halat" height="150" ></img>
              <h3>Quiz Application</h3>
            </div>
          </a>
        </div>
        <div className="project">
          <a href="https://github.com/Samad-Ullah/AirLine-Ticketing-UI">
            <div className="item">
              <img src="https://media.tenor.com/images/8b3aeb3da9dac4209853143bc313f56f/tenor.gif" alt="halat" ></img>
              <h3>Airline Web Portal</h3>
            </div>
          </a>
        </div>
        <div className="project">
          <a href="https://github.com/Samad-Ullah/Expense_Tracker_App">
            <div className="item">
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img src="https://i.gifer.com/623F.gif" alt="halat" height="150"></img>
              <h3>Expense Tracker</h3>
            </div>
          </a>
        </div>
        
        <div className="project">
          <a href="https://github.com/Samad-Ullah/Portfolio">
            <div className="item">
              <img src="https://cdn.dribbble.com/users/1092116/screenshots/4338810/my-portfolio-header.gif" alt="halat" height="150"></img>
              <h3>Portfolio</h3>
            </div>
          </a>
        </div>

        <div className="project">
          <a href="https://github.com/Samad-Ullah/React-Fundamentals">
            <div className="item">
              <img src="https://www.aalpha.net/wp-content/uploads/2021/02/reactjs-framework.gif" alt="halat" height="150"></img>
              <h3>React Fundamentals</h3>
            </div>
          </a>
        </div>

        <div className="project">
          <a href="https://github.com/Samad-Ullah/Blog-Site">
            <div className="item">
              <img src="https://i.pinimg.com/originals/d3/46/4a/d3464a4351fdf340ccb6bb37c281381a.gif" alt="halat" height="150"></img>
              <h3>Blog Site (MERN)</h3>
            </div>
          </a>
        </div>

  
      </div>
    </div>
  )
}

export default Portfolio
