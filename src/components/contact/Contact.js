import React, { useState } from 'react'
import emailjs from 'emailjs-com';
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

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_ak6hj3e', 'template_be5bjvq', e.target, 'user_qSwE1SUio76cPBmRBS4UB')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
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
                <form onSubmit={sendEmail}>
                    <input type="test" placeholder="email" onChange={e => setemail(e.target.value)} value={email} name="email"></input>&nbsp;
                    <textarea placeholder="Message.." onChange={e => setmsg(e.target.value)} value={msg} name="message"></textarea>&nbsp;
                    <input type="submit" value="send message" className="button" ></input>
                </form>
            </div>
        </div>
    )
}

export default Contact
