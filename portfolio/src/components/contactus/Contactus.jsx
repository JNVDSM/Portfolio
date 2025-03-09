import React from "react";
import "./Contactus.css"
export function Contactus(){
    return (
        <div  id="contact" className="contact">
         <div className="contact-title">
            <h1>Get in touch</h1>
         </div>
         <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                
                <div className="contact-details">
                    <div className="contact-detail">
                    <i class="fas fa-envelope"></i> <p>jhansimannidi@gmail.com</p>

                    </div>
                    <div className="contact-detail">
                    <i class="bi bi-telephone"></i><p>+91 7893151303</p>

                        </div>
                        <div className="contact-detail">
                        <i class="fas fa-map-marker-alt"></i> <p>Andhra Pradesh,India</p>
                        </div>
                </div>
            </div>
            <form action="" className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter your name" name="name"/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter your email" name="email" />
                <label htmlFor="">Write your message here</label>
                 <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
               <button className="contact-submit">Submit now</button>
            </form>
         </div>
        </div>
    )
}
