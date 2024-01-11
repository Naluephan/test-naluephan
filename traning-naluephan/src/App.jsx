import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Course from './pages/Course';
import Contact from './pages/Contact';
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
    
  )
}

export default App
