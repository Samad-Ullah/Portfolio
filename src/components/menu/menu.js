import React from 'react'
import './menu.scss'

function menu({menu , setmenu}) {
    return (
        <div className={"menu " + (menu && "active")}>
            <ul>
                <li onClick={()=>setmenu(!menu)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setmenu(!menu)}>
                    <a href="#about">About</a>
                </li>
                <li onClick={()=>setmenu(!menu)}>
                    <a href="#portfolio">Projects</a>
                </li>
                <li onClick={()=>setmenu(!menu)}>
                    <a href="#contact">Contact</a>
                </li>
                
            
            </ul>
        </div>
    )
}

export default menu
