import { Routes, Route } from "react-router-dom";
import './App.css'; 
import Home from "./home";
import Project from "./project"; 
import Contact from "./contact"; 
import Navbar from "./navbar";

export default function App(){
  return(
    <div className="app">
      <Navbar /> 
      <div id="home" className="home">
          <Home /> 
      </div>
  
      <h1 className="intro-projects">Here are some projects I worked on! </h1>
      <div id="project" className="project">
          <Project /> 
      </div>
      <div id="contact" className="contact">
          <Contact /> 
      </div>
    </div>
  )
}