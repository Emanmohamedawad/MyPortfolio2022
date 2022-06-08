import React from "react"
import Header from "./Component/Header/Header"
import Home from "./Component/Hero/Home"
import Features from "./Component/features/Features";
import Portfolio from "./Component/Portfolio/Portfolio";
import Resume from "./Component/Resume/Resume";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer";
// import Intro from "./Component/Intro/Intro";

import "./App.css"

const App = () => {
  return (
    <>
      <Header />
      {/* <Intro /> */}
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Contact /> 
      <Footer />
    </>
  )
}

export default App