import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/zhao-leihan', icon: '👨‍💻', color: 'hover:text-cyber-cyan' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rayhan-aziel-abbrar-71773b34a/', icon: '💼', color: 'hover:text-cyber-cyan' },
    { name: 'Instagram', url: 'https://www.instagram.com/rayhannzhao/', icon: '📸', color: 'hover:text-cyber-pink' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-cyber-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4 neon-text">
            CONTACT
          </h2>
          <div className="w-24 h-1 bg-cyber-cyan cyber-glow mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-cyber-cyan font-orbitron text-sm uppercase tracking-wider mb-2">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 15px #00f0ff" }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cyber-black border border-cyber-cyan rounded-lg text-white font-inter focus:outline-none transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-cyber-cyan font-orbitron text-sm uppercase tracking-wider mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 15px #00f0ff" }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cyber-black border border-cyber-cyan rounded-lg text-white font-inter focus:outline-none transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-cyber-cyan font-orbitron text-sm uppercase tracking-wider mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 15px #00f0ff" }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-cyber-black border border-cyber-cyan rounded-lg text-white font-inter focus:outline-none transition-all duration-300 resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00f0ff" }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-cyber-cyan text-black font-orbitron text-lg uppercase tracking-wider rounded-lg cursor-pointer transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-orbitron text-cyber-pink mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed mb-6">
                Interested in collaborating on blockchain projects or discussing 
                the future of decentralized technology? Feel free to reach out!
              </p>
            </div>

            <div>
              <h4 className="text-xl font-orbitron text-cyber-cyan mb-4">
                Find Me Online
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`flex items-center space-x-3 p-4 bg-cyber-black rounded-lg border border-gray-800 transition-all duration-300 ${social.color} cursor-pointer`}
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span className="font-orbitron text-sm uppercase tracking-wider">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-cyber-black rounded-lg border border-cyber-cyan">
              <h4 className="text-lg font-orbitron text-cyber-cyan mb-2">
                Quick Response
              </h4>
              <p className="text-gray-300 font-inter text-sm">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to connect with me on LinkedIn.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;