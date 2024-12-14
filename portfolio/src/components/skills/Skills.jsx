import React from "react";
import "./Skills.css";
function Skills(){
    return(<div>
        <div id="skills" className="skills1">
        <h1 style={{textAlign:"center",fontSize:"80px",fontWeight:"600px"}}>Skills</h1>
        <p style={{fontSize:"30px",paddingTop:"20px",textAlign:"center"}}>Here are some of my skills on which I have been working on my personal projects.</p>
        <div className="skills2">
           <div className="front1">
          <h1>Frontend</h1>
          <h3> <span><i className="fab fa-html5 fs-3"></i> HTML</span> <span><i className="fab fa-css3-alt fs-3"></i> CSS</span> </h3>
          <h3> <span><i className="fab fa-js fs-3"></i> JAVA SCRIPT</span> <span><i className="fab fa-react fs-3"></i> REACT JS</span></h3>
          <h3><span><i className="fab fa-bootstrap fs-3"></i> BOOTSTRAP</span> <span><img src="" alt="" /> REDUX</span></h3>
           </div>
           <div className="back1">
            <h1>Backend</h1>
           <h3><i className="fab fa-node-js fs-3"></i> NODE JS</h3> 
           <h3><i className="fas fa-server fs-3"></i> EXPRESS JS</h3>
           </div>
        </div>
         <div className="skills3">
         <div className="database1">
            <h1 >Database</h1>
            <h3><i className="fas fa-leaf fs-3"></i> MongoDB</h3>
           </div>
           <div className="database2">
            <h1>Others</h1>
            <h3><i className="fab fa-git-alt fs-3"></i> Git</h3>
            <h3><i className="fab fa-github fs-3"></i> GitHub</h3>
            <h3><i className="fas fa-code fs-3"></i> VSCode</h3>
           </div>
         </div>
        </div>
    </div>)
}
export default Skills;