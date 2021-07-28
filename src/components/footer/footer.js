import React from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import "./footer.scss"

function footer() {
    return (
        <div className="footer">

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
            <div className="end">
                Samad Ullah @ 2021
            </div>


        </div>
    )
}

export default footer
