import React from "react";
import "./Hero.css"
function Hero(){
    return(<div id="hero" className="hero">
          <img src="/pic5.jpg" alt=""  width={"400px"} height={"400px"}/>
          <h1><span>I'm Harsha Vardhan,</span> frontend developer</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia unde doloremque tenetur perspiciatis nostrum eveniet exercitationem voluptatibus laborum pariatur beatae.</p>
          <div className="hero-action">
            <div className="heroconnect">connect with me</div>
            <div className="hero-resume">My resume</div>
          </div>
    </div>)
}
export default Hero;