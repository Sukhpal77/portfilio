import { BrowserRouter as Router, Routes, Route, Navigate, } from 'react-router-dom';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedPreference = localStorage.getItem('darkMode');
    return storedPreference ? JSON.parse(storedPreference) : false;  
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <Router>
      <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} h-[100vh] overflow-scroll no-scrollbar`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex flex-col lg:flex-row gap-4 w-full lg:pt-2 pt-16 p-6 mx-auto">
          <ProfileCard />
          <div className="lg:w-2/3 w-full flex flex-col gap-4">
            <NavBar />
            <Routes>
              <Route path="/" element={<Navigate to="/about" />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
