import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import DataAnalytics from './pages/DataAnalytics';
import Services from './pages/Services';
import Contact from './pages/Contact';
import InstallationGuide from './pages/InstallationGuide';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/data-analytics" element={<DataAnalytics />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/installation-guide" element={<InstallationGuide />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  );
}

export default App;