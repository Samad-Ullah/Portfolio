import React, { useState } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './works.scss'

function Works() {
    const [currentslide, setcurrentslide] = useState(0)
    const data = [
        {
            id: "1",
            img: 'https://upload.wikimedia.org/wikipedia/commons/0/07/News.png',
            title: "Halaat o Waqiat",
            description: "A media website, devoted to delivering the news in a different format than television, print or radio"
        },
        {
            id: "2",
            img: "https://thisweekinlibraries.com/wp-content/uploads/2021/02/amazon-clone.png",
            title: "Amazon Clone",
            description: "Replicate the some functionality of amazon store like listing product,sign-up,shopping Basket, and Cart "
        },
        {
            id: "4",
            img: "https://paloalto.bibliocommons.com/events/uploads/images/full/b9833414b5d15a2098153d17b6533b82/Quiz.png",
            title: "Quiz Application",
            description: "Simple quiz Application  "
        },
        {
            id: "5",
            img: "https://www.creationinfoways.com/images/pw-d.png",
            title: "Airline Web Portal",
            description: "UI build in React js and material ui "
        }

    ];


    const handleClick = (click) => {
        click === "left" ? setcurrentslide(currentslide > 0 ? currentslide - 1 : 2) :
            setcurrentslide(currentslide < data.length - 1 ? currentslide + 1 : 0)
    }


    return (
        <div className="work" id="work">
            <div className="slider" style={{ transform: `translateX(-${currentslide * 100}vw)` }}>
                {data.map((d,i) => (
                    <div className="container" key={i}>
                        <div className="item">
                            <div className="left">
                                <div className="left_container">
                                    <h2>{d.title}</h2>
                                    <p> {d.description}
                                    </p>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </div>

                ))
                }

            </div>



            <ArrowBackIosIcon className="arrow left" onClick={() => handleClick("left")}></ArrowBackIosIcon>
            <ArrowForwardIosIcon className="arrow right" onClick={() => handleClick("right")}></ArrowForwardIosIcon>


        </div>
    )
}

export default Works
