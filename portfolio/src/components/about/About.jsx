import React from "react";
import "./About.css"
function About(){
    return(<div id="about" className="about">
        <div className="about-title">
            <h1>About me</h1>
            {/* <img src="/Jhansi_Mannidi_Image.jpeg" alt="" /> */}
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src="/Jhansi_Mannidi_Image.jpeg" alt="" width={"300px"} height={"400px"}/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p> A highly skilled Full Stack Developer with expertise in building scalable web applications using modern technologies like React Js,Node.js and PostgreSQL. Adept at delivering robust, high-performance solutions with a strong focus on user experience and problem-solving. Passionate about leveraging the latest tech trends to drive innovation</p>
                    
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width:"70%"}}/></div>
                    
                    
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achivement">
                <h1>10 Months</h1>
                <p>PROFESSIONAL EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>2</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            
            
        </div>
    </div>)
}
export default About;