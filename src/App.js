import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services"
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";

import Testimonial from "./components/testimonials/Testimonials";
import Pricing from "./components/pricing/Pricing";

const  App = () =>{
  return (
    
    
    <div>
        <Sidebar />
      <div className="main">
        
       
        <Home />
        <About/>
        <Services />
        
        <Resume />
        <Portfolio/>
        <Blog />
        <Testimonial />
        <Pricing />
        <Contact /> 
        
        
      </div>
    </div>
  );
}

export default App;
