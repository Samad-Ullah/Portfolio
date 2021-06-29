import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
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
            

                <div className="right">
                    <div className="mail">
                        <MailOutlineIcon></MailOutlineIcon>
                        <span><h3>usamad152@gmail.com</h3></span>
                    </div>
                    <div className="phone">
                        <PhoneAndroidIcon></PhoneAndroidIcon>
                        <span><h3>+92-315-5131510</h3></span>
                    </div>
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
