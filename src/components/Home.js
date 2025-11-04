import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Background from './Background.js';
import { gsap } from 'gsap';

const Home = () => {
  const textRef = useRef(null);
  const subtextRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(textRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    ).fromTo(subtextRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
      "-=0.8"
    );

    // Glitch effect
    const glitchInterval = setInterval(() => {
      gsap.to(textRef.current, {
        duration: 0.1,
        x: Math.random() * 10 - 5,
        y: Math.random() * 10 - 5,
        onComplete: () => {
          gsap.to(textRef.current, {
            duration: 0.1,
            x: 0,
            y: 0
          });
        }
      });
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Background />
        </Canvas>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black/80 via-transparent to-cyber-black/80 z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-20">
        <motion.h1
          ref={textRef}
          className="text-6xl md:text-8xl font-orbitron font-bold mb-6 glitch-text"
          data-text="Hi, I'm Rayhan 👋"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Hi, I'm Rayhan 👋
        </motion.h1>
        
        
        <motion.div
        ref={subtextRef}
        className="text-xl md:text-2xl font-inter mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        >
        <span className="neon-text">Informatics Engineering Student</span> 
        <span className="mx-4 text-gray-400">|</span>
        <span className="text-cyber-pink">Web & Back-End Developer Enthusiast</span>
        <span className="mx-4 text-gray-400">|</span>
        <span className="text-cyber-cyan">Blockchain & AI Learner</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center space-x-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00f0ff" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent cyber-border text-cyber-cyan font-orbitron uppercase tracking-wider cursor-pointer"
          >
            View Projects
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #ff00ff" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-cyber-pink text-black font-orbitron uppercase tracking-wider cursor-pointer"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyber-cyan rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyber-cyan rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;