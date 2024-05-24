import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSession from './components/WorkoutSession';
import Gallary from './components/Gallary';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import BMIcalculator from "./components/BMIcalculator";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Hero/>
      <WorkoutSession/>
      <Gallary/>
      <Pricing/>
      <Contact/>
      <BMIcalculator/>
      <Footer/>
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};

export default App;