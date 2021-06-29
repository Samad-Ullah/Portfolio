import React, { useState } from 'react'
import './contact.scss';
import Shake from "../../Assets/shako.png"
function Contact() {
    var [email, setemail] = useState("");
    var [msg, setmsg] = useState(" ");

    var handlerSubmit = (e) => {
        e.preventDefault();
        setemail("");
        setmsg("");
        alert(`your email and message received ! Thanks for your contact`)
       
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src={Shake} alt="abc"></img>
            </div>


            <div className="right">
                <h1>Contact</h1>
                <form onSubmit={handlerSubmit}>
                    <input type="test" placeholder="email" onChange={e => setemail(e.target.value)} value={email}></input>&nbsp;
                    <textarea placeholder="Message.." onChange={e => setmsg(e.target.value)} value={msg}></textarea>&nbsp;
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
