import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Solutions from './pages/Solutions';
import SolutionsContact from './pages/SolutionsContact';
import ClientLogin from './pages/ClientLogin';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-workspace">
        {/* NAVBAR - persistent header across all routes */}
        <Navbar />

        {/* Dynamic Route Pages governed by React Router */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:id" element={<Solutions />} />
          <Route path="/solutions-contact" element={<SolutionsContact />} />
          <Route path="/client-login" element={<ClientLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
