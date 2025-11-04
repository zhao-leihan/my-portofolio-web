import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Blog from './components/Blogs.js';
import Contact from './components/Contact.js';
import Cursor from './components/Cursor.js';
import SplashScreen from './components/SplashScreen.js';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleSplashFinish = () => {
    setShowSplash(false);
    setShowContent(true);
  };

  // Prevent scroll during splash screen
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showSplash]);

  return (
    <div className="App">
      <Cursor />
      
      {/* Splash Screen */}
      {showSplash && (
        <SplashScreen onFinish={handleSplashFinish} />
      )}

      {/* Main Content */}
      {showContent && (
        <>
          <Navbar />
          <main>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Blog />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;