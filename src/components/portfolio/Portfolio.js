import React from 'react'
import './portfolio.scss';
import Halaat from "../../Assets/Halaat.jpeg"
import Amazon from "../../Assets/amazon.png"
import Quiz from "../../Assets/Quiz.png"
import Flight from "../../Assets/flight.png"
import Expense from "../../Assets/pet1.jpg"

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Web Projects</h2>
     
      <div className="container">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://halaatowaqiat.netlify.app/">
        <div className="item">
          <img src={Halaat} alt="halat"></img>
          <h3>Halaat o Waqiat</h3>
        </div>
        </a>
        &nbsp;
      
        <a href="https://github.com/Samad-Ullah/Amazon-Clone">
        <div className="item">
          <img src={Amazon} alt="halat" ></img>
          <h3>Amazon Clone</h3>
        </div>
        </a>
&nbsp;
        <a href="https://github.com/Samad-Ullah/Online_Quiz_Application">
        <div className="item">
          <img src={Quiz} alt="halat" ></img>
          <h3>Quiz Application</h3>
        </div>
        </a>
&nbsp;


        <a href="https://github.com/Samad-Ullah/AirLine-Ticketing-UI">
          
        <div className="item">
        &nbsp;&nbsp;&nbsp;&nbsp;
          <img src={Flight} alt="halat" ></img>
          <h3>Airline Web Portal</h3>
        </div>
        </a>
&nbsp;
        <a href="https://github.com/Samad-Ullah/Expense_Tracker_App">
        <div className="item">
          &nbsp;&nbsp;&nbsp;&nbsp;
          <img src={Expense} alt="halat" height="150"></img>
          <h3>Expense Tracker</h3>
        </div>
        </a>
       
      </div>
    </div>
  )
}

export default Portfolio
