import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"
import "./Navbar.css"

function Navbar(){
 const [menu,setMenu] =  useState("home")
    return(<div className="navbar">
       
       <ul className="nav-menu">
       <h1><span>MJNVDS</span></h1>
        <li><AnchorLink className="anchor-link" href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"? <div className="underline"><hr color="red" /></div>:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={1} href="#about" ><p onClick={()=>setMenu("about")}>About&nbsp;Me</p></AnchorLink>{menu==="about"? <div className="underline"><hr color="red"  /></div>:<></>}</li>
        <li><AnchorLink className="anchor-link" offset={1} href="#skills"><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink>{menu==="skills"?<div className="underline"><hr color="red" /></div>:<></>}</li>
        {/* <li><AnchorLink className="anchor-link" offset={1} href="#work"><p onClick={()=>setMenu("work")}>Projects</p></AnchorLink>{menu==="work"? <div className="underline"> <hr color="red" /></div>:<></>}</li> */}
        <li><AnchorLink className="anchor-link" offset={1} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"? <div className="underline"> <hr color="red" /></div>:<></>}</li>
        <div className="nav-connect">Connect&nbsp;with&nbsp;me</div>
       </ul> 
      
    </div>)
}
export default Navbar;