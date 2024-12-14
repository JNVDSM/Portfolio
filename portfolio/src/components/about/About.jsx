import React from "react";
import "./About.css"
function About(){
    return(<div id="about" className="about">
        <div className="about-title">
            <h1>About me</h1>
            {/* <img src="/harsha1.jpeg" alt="" /> */}
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src="/pic5.jpg" alt="" width={"300px"} height={"400px"}/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet exercitationem esse sit enim dolore sequi praesentium aliquid corporis quod nemo.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa inventore eligendi corporis enim eius excepturi commodi doloribus quas corrupti.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Redux</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achivement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>)
}
export default About;