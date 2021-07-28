import React , { useState, useEffect } from "react"
import "./About.scss"
import Fast from "../../Assets/fast.png"
import Responsive from "../../Assets/responsive-design.png"
import Idea from "../../Assets/idea.png"
import Content from "../../Assets/content.png"
import Samad from "../../Assets/jkj.jpg"
import Bar from "../Progressbar/Progressbar"

function About() {



    return (
        <div className="about" id="about">
            <h2 className="h2">About</h2>
            <div className="qualities">
                <div className="furious">
                    <img className="image" src={Fast} alt="fast" width="100px" height="100px"></img>
                    <h3 className="text">Fast</h3>
                    <p className="para">fast loaded time and lag free interaction </p>

                </div>
                <div className="furious">
                    <img className="image" src={Responsive} alt="fast" width="100px" height="100px"></img>
                    <h3 className="text">Responsive</h3>
                    <p className="para">My layouts works on any device, small or big </p>

                </div>
                <div className="furious">
                    <img className="image" src={Idea} alt="fast" width="100px" height="100px"></img>
                    <h3 className="text"> Intuitive</h3>
                    <p className="para">Strong preference for easy to use to use,intuitive UX/UI</p>

                </div>
                <div className="furious">
                    <img className="image" src={Content} alt="fast" width="100px" height="100px"></img>
                    <h3 className="text"> Dynamic</h3>
                    <p className="para">Website don't have to be static. I love making pages come to life  </p>

                </div>

            </div>
            <div className="profile">
                <div className="introduction">
                    <img className="image" src={Samad} alt="samad" width="270" height="300"></img>
                    <h2 className="me">Who's this guy ?</h2>
                    <p className="paragraph">I am a Web-Developer <br></br>
                        I have serious effects for making<br></br> U.I. effects and creating dynamic and inituitive user interfaces. <br></br>
                        <a href="#contact" className="a">Let's make something special.</a></p>
                </div>
                <div className="bar">
                    <h2>Work FLow</h2>
                    <Bar type={"HTML"}  bgcolor={"rgb(62, 171, 190)"} completed={90}></Bar>
                    <Bar type={"CSS"}  bgcolor={"rgb(62, 171, 190)"} completed={90}></Bar>
                    <Bar type={"SaaS"}  bgcolor={"rgb(62, 171, 190)"} completed={80}></Bar>
                    <Bar type={"Node.js"}  bgcolor={"rgb(62, 171, 190)"} completed={40}></Bar>
                    <Bar type={"JavaScript"}  bgcolor={"rgb(62, 171, 190)"} completed={70}></Bar>
                    <Bar type={"React"}  bgcolor={"rgb(62, 171, 190)"} completed={80}></Bar>
                    <Bar type={"Angular"}  bgcolor={"rgb(62, 171, 190)"} completed={50}></Bar>
                    <Bar type={"Express.js"}  bgcolor={"rgb(62, 171, 190)"} completed={75}></Bar>
                    <Bar type={"MongoDB"}  bgcolor={"rgb(62, 171, 190)"} completed={70}></Bar>
                    <Bar type={"AWS"}  bgcolor={"rgb(62, 171, 190)"} completed={40}></Bar>
                </div>
            </div>


        </div>
    )
}

export default About
