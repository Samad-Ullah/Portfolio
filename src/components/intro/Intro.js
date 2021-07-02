import React, {useEffect, useRef} from 'react'
import './intro.scss';
import Samad from '../../Assets/react-js-developer.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from "ityped";
function Intro() {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current,
             { showCursor: false,
                backDelay:1500,
                backSpeed:40,
                 strings: 
                ['React', 'Redux','Angular','JavaScript','HTML','Sass' ] })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgcontainer">
                    <img src={Samad} alt="samad"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Samad Ullah</h1>
                    <h3>Web Developer <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <div className="arrow">
                        <ExpandMoreIcon></ExpandMoreIcon>
                    </div>
                    
                </a>
            </div>
        </div>
    )
}

export default Intro
