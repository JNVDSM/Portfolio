import React from "react";
import "./Hero.css"
function Hero(){
    return(<div id="hero" className="hero">
          <img src="/Jhansi_Mannidi_Image.jpeg" alt=""  width={"400px"} height={"400px"}/>
          <h1><span>I'm M.J.N.V.D.Sambhavi,</span> </h1>
          <h1>FullStack Developer</h1>
          
          <div className="hero-action">
            <div className="heroconnect">connect with me</div>
            <div className="hero-resume" ><a href="https://drive.google.com/file/d/1ReSP8cTXAsHqrxAcYcuADPYOyPxqgOc9/view?usp=drivesdk" target="_blank">My Resume</a></div>
          </div>
    </div>)
}
export default Hero;