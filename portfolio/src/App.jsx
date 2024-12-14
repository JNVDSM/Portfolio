import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Education from "./components/projects/Education";
import { Contactus } from "./components/contactus/Contactus";
import Footer from "./components/footer/Footer";
function App(){
  return(<div>
    <Navbar/>
    <Hero/>
    <About/>
   <Skills/>
   <Education/>
   <Contactus/>
   <Footer/>
  </div>)
}
export default App;