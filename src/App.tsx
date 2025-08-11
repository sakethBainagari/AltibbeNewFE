import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';  
import PageWipe from './components/common/PageWipe';
import HomePage from './pages/v2/HomePage';
import OurWorkPage from './pages/v2/OurWorkPage';
import HedamoPage from './pages/v2/HedamoPage';
import AboutPage from './pages/About';
import CollaboratePage from './pages/v2/CommunityPage';
import BlogMediaPage from './pages/BlogMedia';
import ContactPage from './pages/v2/Solutionpage';
import FooterWithHoverWipe from './components/common/FooterWipe';

function App() {
  const [showWipe, setShowWipe] = useState(true);

  useEffect(() => {
    // Remove the wipe node after animation so it never blocks again
    const t = setTimeout(() => setShowWipe(false), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <Router>
      <PageWipe />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-work" element={<OurWorkPage />} />
        <Route path="/hedamo" element={<HedamoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/collaborate" element={<CollaboratePage />} />
        <Route path="/blog-media" element={<BlogMediaPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
      <FooterWithHoverWipe />
    </Router>
  );
}

export default App;