import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CursorGlow } from './components/CursorGlow';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-black font-sans antialiased">
        <CursorGlow />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
