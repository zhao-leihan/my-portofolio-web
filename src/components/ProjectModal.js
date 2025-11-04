import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: {
        duration: 0.3
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          className="bg-cyber-dark rounded-xl border-2 border-cyber-cyan cyber-glow max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-6 border-b border-cyber-cyan/30">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-3xl font-orbitron text-cyber-cyan mb-2">
                  {project.title}
                </h2>
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-orbitron ${
                    project.status === "Active" 
                      ? "bg-green-500/20 text-green-400 border border-green-500" 
                      : "bg-yellow-500/20 text-yellow-400 border border-yellow-500"
                  }`}>
                    {project.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-orbitron bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan">
                    {project.category}
                  </span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 flex items-center justify-center bg-cyber-black border border-cyber-cyan rounded-lg text-cyber-cyan hover:bg-cyber-cyan hover:text-black transition-all duration-300 cursor-pointer"
                onClick={onClose}
              >
                ✕
              </motion.button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Main Image */}
            <div className="relative rounded-lg overflow-hidden border border-cyber-cyan/30">
              <div className="w-full h-64 bg-gradient-to-br from-cyber-cyan/10 to-cyber-pink/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 opacity-80">
                    {project.icon}
                  </div>
                  <p className="font-orbitron text-cyber-cyan">
                    Project Screenshot
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-orbitron text-cyber-pink mb-3">
                Project Overview
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed">
                {project.detailedDescription || project.description}
              </p>
            </div>

            {/* Features */}
            {project.features && (
              <div>
                <h3 className="text-xl font-orbitron text-cyber-cyan mb-3">
                  Key Features
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-cyber-black rounded-lg border border-gray-800">
                      <span className="text-cyber-pink mt-1">▶</span>
                      <span className="text-gray-300 font-inter text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Code Structure */}
            {project.codeStructure && (
              <div>
                <h3 className="text-xl font-orbitron text-cyber-pink mb-3">
                  Code Structure
                </h3>
                <div className="bg-cyber-black rounded-lg border border-gray-800 p-4 font-mono text-sm">
                  <pre className="text-gray-300 whitespace-pre-wrap">
                    {project.codeStructure}
                  </pre>
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-orbitron text-cyber-cyan mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-cyber-black text-cyber-pink text-sm font-orbitron rounded-lg border border-cyber-pink hover:border-cyber-cyan hover:text-cyber-cyan transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="flex space-x-4 pt-4 border-t border-cyber-cyan/30">
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00f0ff" }}
                className="flex-1 py-3 bg-transparent cyber-border text-cyber-cyan text-center font-orbitron uppercase tracking-wider cursor-pointer hover:bg-cyber-cyan hover:text-black transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                🚀 View on GitHub
              </motion.a>
              <motion.a
                href={project.demo}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #ff00ff" }}
                className="flex-1 py-3 bg-cyber-pink text-black text-center font-orbitron uppercase tracking-wider cursor-pointer hover:bg-cyber-cyan hover:text-black transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐 Live Demo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;