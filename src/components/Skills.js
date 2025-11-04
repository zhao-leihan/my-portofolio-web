import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    // ... (data skillCategories tetap sama)
    {
      category: "Blockchain Development",
      skills: [
        { name: "Smart Contracts", level: 85 },
        { name: "Solidity", level: 80 },
        { name: "Web3.js", level: 75 },
        { name: "Cryptography", level: 80 },
        { name: "Rust", level: 65 }
      ],
      icon: "⛓️"
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Golang", level: 90 },
        { name: "Python", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "RESTful APIs", level: 88 },
        { name: "Java", level: 85 },
        { name: "C++", level: 85}
      ],
      icon: "⚙️"
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "TailwindCSS", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "Flutter", level: 88 }
      ],
      icon: "🎨"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4 neon-text">
            SKILLS & TECHNOLOGIES
          </h2>
          <div className="w-24 h-1 bg-cyber-cyan cyber-glow mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // --- PERUBAHAN ADA DI CLASS INI ---
          // Mengubah dari grid menjadi flex, wrap, dan justify-center
          className="flex flex-wrap justify-center gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              // Menambahkan lebar maksimum agar di layar besar tidak terlalu lebar
              className="w-full sm:w-80 md:w-96 lg:w-72 bg-cyber-black rounded-lg p-6 border border-gray-800 hover:border-cyber-cyan transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="text-lg font-orbitron text-cyber-cyan">
                  {category.category}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-inter text-sm">
                        {skill.name}
                      </span>
                      <span className="text-cyber-cyan font-orbitron text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                          ease: "easeOut" 
                        }}
                        className="h-2 rounded-full cyber-glow bg-cyber-cyan"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-cyber-black rounded-lg p-8 border border-cyber-pink max-w-4xl mx-auto">
            <h3 className="text-2xl font-orbitron text-cyber-pink mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-300 font-inter mb-6">
              I'm constantly exploring new technologies and frameworks to stay at the forefront of software development. 
              Currently diving deeper into AI/ML integration with blockchain and advanced system architecture.
            </p>
            <div className="flex justify-center space-x-4">
              <span className="px-4 py-2 bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan rounded-full text-sm font-orbitron">
                AI/ML
              </span>
              <span className="px-4 py-2 bg-cyber-pink/20 text-cyber-pink border border-cyber-pink rounded-full text-sm font-orbitron">
                System design
              </span>
              <span className="px-4 py-2 bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan rounded-full text-sm font-orbitron">
                Blockchain
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;