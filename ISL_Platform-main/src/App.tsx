import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Translator from './pages/Translator';
import About from './pages/About';
import Login from './pages/Login';
import ChatDock from './components/ChatDock';
import { Navbar } from './components/Navbar';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

const AppContent = () => {
  const { language } = useLanguage();

  return (
    <div key={language} className="relative min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translate" element={<Translator />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ChatDock />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;
