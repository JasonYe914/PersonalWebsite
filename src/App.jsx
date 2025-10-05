import { Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about"; 
import Project from "./project"; 
import Contact from "./contact"; 
import Navbar from "./navbar";

export default function App(){
  return(
    <div className="app">
      <Navbar /> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/project" element={<Project />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </div>
  )
}