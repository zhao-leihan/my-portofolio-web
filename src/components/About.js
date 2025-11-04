import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'Golang', level: 85, color: '#00ADD8' },
    { name: 'Solidity', level: 80, color: '#363636' },
    { name: 'React', level: 75, color: '#61DAFB' },
    { name: 'Python', level: 80, color: '#3776AB' },
    { name: 'JavaScript', level: 85, color: '#F7DF1E' },
    { name: 'TypeScript', level: 80, color: '#3178C6' },
    { name: 'Blockchain', level: 85, color: '#F7931A' },
    { name: 'Cyber Security', level: 75, color: '#FF6B6B' }
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

  return (
    <section id="about" className="min-h-screen py-20 bg-cyber-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4 neon-text">
            ABOUT ME
          </h2>
          <div className="w-24 h-1 bg-cyber-cyan cyber-glow mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              {/* Ganti dengan foto Anda */}
              <div className="w-80 h-80 rounded-full border-4 border-cyber-cyan cyber-glow overflow-hidden animate-float bg-gradient-to-br from-cyber-cyan/20 to-cyber-pink/20 flex items-center justify-center">
                {
                <img
                  src="images/profile.jpeg"
                  alt="Rayhan"
                  className="w-full h-full object-cover"
                />
                }
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-cyber-pink opacity-50"
              />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-orbitron text-cyber-pink mb-4">
                Informatics Engineering Student
              </h3>
              <p className="text-gray-300 leading-relaxed font-inter text-lg">
                I'm Rayhan Aziel Abbrar, passionate about cutting-edge technologies with a strong focus on Web Development, Blockchain, and Artificial Intelligence. I love exploring the world of decentralized systems and cybersecurity, aiming to create innovative and secure digital solutions.

                Currently, I’m working on projects that bridge the gap between traditional and modern technologies combining creativity, logic, and curiosity to build the future of tech.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-4 bg-cyber-black rounded-lg border border-cyber-cyan">
                  <div className="text-2xl mb-2">🌐</div>
                  <h4 className="font-orbitron text-cyber-cyan text-sm">Web & Back-End</h4>
                </div>
                <div className="text-center p-4 bg-cyber-black rounded-lg border border-cyber-pink">
                  <div className="text-2xl mb-2">⛓️</div>
                  <h4 className="font-orbitron text-cyber-pink text-sm">Blockchain</h4>
                </div>
                <div className="text-center p-4 bg-cyber-black rounded-lg border border-cyber-cyan">
                  <div className="text-2xl mb-2">🤖</div>
                  <h4 className="font-orbitron text-cyber-cyan text-sm">AI Learner</h4>
                </div>
                <div className="text-center p-4 bg-cyber-black rounded-lg border border-cyber-pink">
                  <div className="text-2xl mb-2">🔒</div>
                  <h4 className="font-orbitron text-cyber-pink text-sm">Cyber Security</h4>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-orbitron text-cyber-cyan mb-4">
                Technical Skills
              </h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="skill-item"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-inter text-gray-300">{skill.name}</span>
                      <span className="font-orbitron text-cyber-cyan">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        className="h-2.5 rounded-full cyber-glow"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;