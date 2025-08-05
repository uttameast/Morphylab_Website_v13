import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import RequestDemo from './pages/RequestDemo';
import About from './pages/About';
import Security from './pages/technology/Security';
import Cloud from './pages/technology/Cloud';
import AIAnalytics from './pages/technology/AIAnalytics';
import Archival from './pages/solutions/Archival';
import Migration from './pages/solutions/Migration';
import Backup from './pages/solutions/Backup';
import Recovery from './pages/solutions/Recovery';
import Analytics from './pages/solutions/Analytics';
import Industries from './pages/solutions/Industries';
import Healthcare from './pages/industries/Healthcare';
import Finance from './pages/industries/Finance';
import Legal from './pages/industries/Legal';
import Education from './pages/industries/Education';
import Government from './pages/industries/Government';
import Insurance from './pages/industries/Insurance';
import Blog from './pages/resources/Blog';
import BlogPost from './pages/resources/BlogPost';
import CaseStudies from './pages/resources/CaseStudies';
import ChatBot from './components/chat/ChatBot';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request-demo" element={<RequestDemo />} />
            <Route path="/about" element={<About />} />
            <Route path="/technology/security" element={<Security />} />
            <Route path="/technology/cloud" element={<Cloud />} />
            <Route path="/technology/ai-analytics" element={<AIAnalytics />} />
            <Route path="/solutions/archival" element={<Archival />} />
            <Route path="/solutions/migration" element={<Migration />} />
            <Route path="/solutions/backup" element={<Backup />} />
            <Route path="/solutions/analytics" element={<Analytics />} />
            <Route path="/solutions/recovery" element={<Recovery />} />
            <Route path="/solutions/industries" element={<Industries />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/finance" element={<Finance />} />
            <Route path="/industries/legal" element={<Legal />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/government" element={<Government />} />
            <Route path="/industries/insurance" element={<Insurance />} />
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/resources/blog/:slug" element={<BlogPost />} />
            <Route path="/resources/case-studies" element={<CaseStudies />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}