import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Festivals from "./Festivals";
import LearnMore from "./LearnMore";
import About from "./About";
import Contact from "./Contact";
import Quiz from "./Quiz";
import Map from "./Map";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar is constant across all pages */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/festival/:id" element={<LearnMore />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
