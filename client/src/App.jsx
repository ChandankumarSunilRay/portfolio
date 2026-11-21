import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Journey from './components/Journey.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('portfolio-theme') !== 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f7f3] text-[#18202b] transition-colors duration-300 dark:bg-[#101318] dark:text-[#f3f1ea]">
      <Header darkMode={darkMode} onToggleTheme={() => setDarkMode((value) => !value)} />
      <main><Hero /><About /><Skills /><Projects /><Journey /><Contact /></main>
      <Footer />
    </div>
  );
}
