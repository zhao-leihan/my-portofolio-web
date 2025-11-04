import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal.js';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Zytherion Blockchain & Cryptocurrency",
      description: "Custom blockchain implementation with Proof-of-Work consensus algorithm and native cryptocurrency.",
      detailedDescription: "Zytherion is a custom blockchain implementation built from scratch using Golang. It features a Proof-of-Work consensus mechanism, native cryptocurrency (ZTH), peer-to-peer networking, and advanced cryptography. The project focuses on creating a secure, decentralized platform for digital transactions with custom mining capabilities and wallet integration.",
      technologies: ["Golang", "Python", "Proof-of-Work", "Cryptography", "P2P Networking", "Digital Signatures", "Merkle Trees"],
      github: "https://github.com/yourusername/zytherion-blockchain",
      demo: "#",
      status: "In Development",
      category: "Blockchain",
      icon: "⛓️",
      features: [
        "Custom Proof-of-Work consensus algorithm",
        "Native ZTH cryptocurrency",
        "Secure cryptographic hash functions",
        "Peer-to-peer network communication",
        "Transaction validation and mining",
        "Wallet address generation",
        "Blockchain explorer interface"
      ],
      codeStructure: `zytherion-blockchain/
├── cmd/
│   ├── node/           # Blockchain node executable
│   └── wallet/         # Wallet CLI executable
├── internal/
│   ├── blockchain/     # Core blockchain logic
│   ├── crypto/         # Cryptographic functions
│   ├── network/        # P2P networking
│   └── miner/          # Mining operations
├── pkg/
│   ├── transaction/    # Transaction handling
│   └── wallet/         # Wallet management
└── docs/              # Documentation`
    },
    {
      id: 2,
      title: "Exploremate Travel DApp",
      description: "Decentralized travel application built on Ethereum blockchain.",
      detailedDescription: "ExploreMate is a decentralized travel platform that leverages blockchain technology to create a transparent and community-driven travel ecosystem. Users can book accommodations, share experiences, and earn token rewards through the platform's native ERC-20 token. Smart contracts handle bookings, reviews, and reward distributions securely on the Ethereum network.",
      technologies: ["React", "Solidity", "Ethereum SDK", "JavaScript", "TypeScript", "Web3.js", "IPFS", "Hardhat"],
      github: "https://github.com/yourusername/exploremate",
      demo: "#",
      status: "Active",
      category: "Web3 DApp",
      icon: "🌍",
      features: [
        "Smart contract-based booking system",
        "ERC-20 token rewards for community engagement",
        "Decentralized review system",
        "IPFS for decentralized file storage",
        "MetaMask wallet integration",
        "Gas-optimized contract design",
        "Community governance features"
      ],
      codeStructure: `exploremate/
├── contracts/          # Solidity smart contracts
│   ├── ExploreMate.sol
│   ├── TravelToken.sol
│   └── BookingSystem.sol
├── frontend/           # React TypeScript app
│   ├── components/     # React components
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Web3 utilities
│   └── styles/         # TailwindCSS styles
├── tests/              # Smart contract tests
└── scripts/            # Deployment scripts`
    },
    {
      id: 3,
      title: "Zythex Programming Language",
      description: "Custom programming language designed for blockchain development with modern syntax and security focus.",
      detailedDescription: "Zythex is a modern programming language specifically designed for blockchain and smart contract development. It features a clean, secure syntax with built-in security patterns to prevent common vulnerabilities. The compiler is written in Golang and targets multiple platforms including EVM-compatible blockchains and standalone executables. Zythex aims to make blockchain development more accessible and secure.",
      technologies: ["Golang", "Compiler Design", "TypeScript", "JavaScript", "Language Theory", "Parser Generators", "AST"],
      github: "https://github.com/yourusername/zythex-language",
      demo: "#",
      status: "In Development",
      category: "Programming Language",
      icon: "💻",
      features: [
        "Modern syntax with security-focused design",
        "Static type checking and analysis",
        "Smart contract compilation targets",
        "Gas optimization features",
        "Standard library for blockchain operations",
        "IDE support and syntax highlighting",
        "Cross-platform compilation"
      ],
      codeStructure: `zythex-language/
├── compiler/           # Core compiler implementation
│   ├── lexer/          # Lexical analysis
│   ├── parser/         # Syntax parsing
│   ├── ast/            # Abstract syntax tree
│   └── codegen/        # Code generation
├── stdlib/             # Standard library
│   ├── crypto/         # Cryptographic functions
│   ├── blockchain/     # Blockchain operations
│   └── math/           # Mathematical operations
├── examples/           # Example Zythex code
└── tools/              # Developer tools and utilities`
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="min-h-screen py-20 bg-cyber-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4 neon-text">
              PROJECTS
            </h2>
            <div className="w-24 h-1 bg-cyber-cyan cyber-glow mx-auto"></div>
            <p className="text-gray-400 font-inter mt-4 max-w-2xl mx-auto">
              Click "View Project" to see detailed information, code structure, and features of each project.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 0 30px rgba(0, 240, 255, 0.3)"
                }}
                className="bg-cyber-dark rounded-lg overflow-hidden border border-gray-800 cursor-pointer group relative h-full flex flex-col project-card"
              >
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-orbitron z-20 ${
                  project.status === "Active" 
                    ? "bg-green-500/20 text-green-400 border border-green-500" 
                    : "bg-yellow-500/20 text-yellow-400 border border-yellow-500"
                }`}>
                  {project.status}
                </div>

                {/* Category Badge - FIXED TEXT (ini yang Anda pertahankan) */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-orbitron bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan z-20">
                  {project.category === "Programming Language" ? "LANG DEV" : project.category.toUpperCase()}
                </div>

                {/* Project Image Section (Full Cover) */}
                <div className="relative overflow-hidden h-48"> 
                  {/* Gambar sebagai latar belakang penuh kotak */}
                  <img
                    src={`/images/project-${project.id}.jpeg`} 
                    alt={`${project.title} cover`}
                    className="w-full h-full object-cover absolute inset-0 opacity-40 transition-opacity duration-300 group-hover:opacity-60" 
                  />
                  
                  {/* Overlay untuk teks/icon di tengah gambar */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                    <div className="text-center">
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-cyber-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-orbitron text-cyber-cyan mb-3 leading-tight min-h-[56px] flex items-center">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 font-inter mb-4 leading-relaxed text-sm flex-1 min-h-[60px]">
                    {project.description}
                  </p>
                  
                  {/* Technologies - FIXED HEIGHT */}
                  <div className="flex flex-wrap gap-2 mb-4 min-h-[72px]">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-cyber-black text-cyber-pink text-xs font-orbitron rounded border border-cyber-pink hover:border-cyber-cyan hover:text-cyber-cyan transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-cyber-black text-gray-400 text-xs font-orbitron rounded border border-gray-600">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  {/* Buttons */}
                  <div className="flex space-x-3 mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 15px #00f0ff" }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-3 bg-transparent cyber-border text-cyber-cyan text-center font-orbitron text-xs uppercase tracking-wider cursor-pointer hover:bg-cyber-cyan hover:text-black transition-all duration-300"
                      onClick={() => handleProjectClick(project)}
                    >
                      View Project
                    </motion.button>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05, boxShadow: "0 0 15px #ff00ff" }}
                      className="flex-1 py-3 bg-cyber-pink text-black text-center font-orbitron text-xs uppercase tracking-wider cursor-pointer hover:bg-cyber-cyan hover:text-black transition-all duration-300 flex items-center justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="bg-cyber-dark rounded-lg p-8 border border-cyber-cyan max-w-4xl mx-auto">
              <h3 className="text-2xl font-orbitron text-cyber-pink mb-4">
                Open Source Contributor
              </h3>
              <p className="text-gray-300 font-inter mb-6">
                All my projects are open source and available on GitHub. Click "View Project" to explore detailed documentation, code structure, and implementation details.
              </p>
              <motion.a
                href="https://github.com/zhao-leihan"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-6 py-3 bg-cyber-cyan text-black font-orbitron uppercase tracking-wider rounded-lg cursor-pointer hover:bg-cyber-pink transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-2">👨‍💻</span>
                Visit My GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
};

export default Projects;