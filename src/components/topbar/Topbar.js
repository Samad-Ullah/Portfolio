import React from 'react';
import './topbar.scss';

function Topbar({menu , setmenu}) {
    return (
        <div className={"topbar " + (menu && " active")}>
            <div className="wrapper">
                <div className="left">
                    <h3>
                        Hello.
                    </h3>
                    <a href="#intro" className="logo">samad</a>

                </div>
           
                <div className="extreme_right">
                    <div className="humberger" onClick={()=>setmenu(!menu)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Topbar
