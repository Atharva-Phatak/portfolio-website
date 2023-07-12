import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import Social from "./Components/Social";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

function App() {
  //const [isMenuDisplayed, setMenuDisplay] = useState(false)
  return (
    <div>
      
      {/*<NavBar isMenuDisplayed={isMenuDisplayed}  setMenuDisplay = {setMenuDisplay}/> */}
      <HeroSection />  
      <Social /> 
      <About/>
      <Projects />
      <Skills /> 
      <Footer />
    </div>  
  )
}

export default App;
