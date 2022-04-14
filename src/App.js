import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from './NotFound';
import Navbar from "./NavBar";
import Historical from './Historical';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/historical" element={<Historical/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
