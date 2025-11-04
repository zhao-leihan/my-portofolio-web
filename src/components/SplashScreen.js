import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onFinish }) => {
  const [currentText, setCurrentText] = useState('R');
  const [showSplash, setShowSplash] = useState(true);

  const name = "RAYHAN";
  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~';

  useEffect(() => {
    let currentIndex = 0;
    let glitchInterval;

    // Function to generate random glitch character
    const getRandomGlitchChar = () => {
      return glitchChars[Math.floor(Math.random() * glitchChars.length)];
    };

    // Typewriter effect with glitch
    const typeWriter = () => {
      if (currentIndex < name.length) {
        // Glitch effect before revealing actual character
        let glitchCount = 0;
        const glitchDuration = 8; // Number of glitch iterations per character
        
        glitchInterval = setInterval(() => {
          if (glitchCount < glitchDuration) {
            // Show glitch character
            setCurrentText(name.substring(0, currentIndex) + getRandomGlitchChar());
            glitchCount++;
          } else {
            // Show actual character
            clearInterval(glitchInterval);
            setCurrentText(name.substring(0, currentIndex + 1));
            currentIndex++;
            setTimeout(typeWriter, 100); // Delay before next character
          }
        }, 50);
      } else {
        // Animation complete, wait then hide splash
        setTimeout(() => {
          setShowSplash(false);
          setTimeout(onFinish, 500); // Wait for exit animation
        }, 1000);
      }
    };

    // Start animation
    setTimeout(typeWriter, 500);

    return () => {
      if (glitchInterval) clearInterval(glitchInterval);
    };
  }, [onFinish]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      scale: 1.2,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const glitchVariants = {
    animate: {
      x: [0, -2, 2, -2, 2, 0],
      y: [0, 2, -2, 2, -2, 0],
      transition: {
        duration: 0.1,
        repeat: Infinity,
        repeatType: "mirror"
      }
    }
  };

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-cyber-black"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-10 grid-rows-10 w-full h-full">
              {Array.from({ length: 100 }).map((_, i) => (
                <div key={i} className="border border-cyber-cyan/10"></div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="relative text-center">
            {/* Glitch Effect Container */}
            <motion.div
              variants={glitchVariants}
              animate="animate"
              className="relative"
            >
              {/* Main Text */}
              <motion.h1
                variants={textVariants}
                className="text-6xl md:text-8xl font-orbitron font-bold neon-text mb-4 relative"
              >
                {currentText}
                {/* Glitch Layers */}
                <span className="absolute top-0 left-0 text-cyber-pink opacity-70 glitch-layer-1">
                  {currentText}
                </span>
                <span className="absolute top-0 left-0 text-cyber-cyan opacity-50 glitch-layer-2">
                  {currentText}
                </span>
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="text-cyber-pink font-orbitron text-lg md:text-xl uppercase tracking-widest"
            >
              Loading....
            </motion.p>

            {/* Loading Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="w-64 h-1 bg-cyber-cyan cyber-glow mx-auto mt-8 rounded-full overflow-hidden"
            >
              <motion.div
                animate={{
                  x: [-64, 64],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-16 h-1 bg-cyber-pink cyber-glow"
              />
            </motion.div>

            {/* Binary Rain Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute text-cyber-cyan/30 font-mono text-sm"
                  initial={{
                    y: -100,
                    x: Math.random() * window.innerWidth,
                    opacity: 0
                  }}
                  animate={{
                    y: window.innerHeight + 100,
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    delay: Math.random() * 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {Math.random() > 0.5 ? '1' : '0'}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Scan Line Effect */}
          <motion.div
            animate={{ y: ["0%", "100%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/5 to-transparent pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;