import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Building a Custom Blockchain from Scratch",
      excerpt: "Learn how to implement a Proof-of-Work consensus algorithm and create your own cryptocurrency using Golang.",
      category: "Blockchain",
      readTime: "8 min read",
      date: "2024-01-15",
      tags: ["Golang", "Blockchain", "Cryptography"]
    },
    {
      id: 2,
      title: "The Future of Programming Languages in Web3",
      excerpt: "Exploring the need for specialized programming languages in blockchain development and smart contract security.",
      category: "Programming",
      readTime: "6 min read",
      date: "2024-01-10",
      tags: ["Web3", "Programming Languages", "Security"]
    },
    {
      id: 3,
      title: "Decentralized Travel Applications: A New Era",
      excerpt: "How blockchain technology is revolutionizing the travel industry with transparent and community-driven platforms.",
      category: "Web3",
      readTime: "5 min read",
      date: "2024-01-05",
      tags: ["DApp", "Travel", "Ethereum"]
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
    <section id="blog" className="py-20 bg-cyber-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-4 neon-text">
            BLOG & ARTICLES
          </h2>
          <div className="w-24 h-1 bg-cyber-cyan cyber-glow mx-auto"></div>
          <p className="text-gray-400 font-inter mt-4 max-w-2xl mx-auto">
            Sharing knowledge and insights about blockchain development, programming languages, and emerging technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articles.map((article) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 0 30px rgba(0, 240, 255, 0.2)"
              }}
              className="bg-cyber-dark rounded-lg overflow-hidden border border-gray-800 cursor-pointer group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-orbitron ${
                    article.category === "Blockchain" 
                      ? "bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan"
                      : article.category === "Programming"
                      ? "bg-cyber-pink/20 text-cyber-pink border border-cyber-pink"
                      : "bg-purple-500/20 text-purple-400 border border-purple-500"
                  }`}>
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-xs font-inter">
                    {article.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-orbitron text-cyber-cyan mb-3 group-hover:text-cyber-pink transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 font-inter text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-cyber-black text-gray-400 text-xs font-inter rounded border border-gray-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <span className="text-gray-500 text-xs font-inter">
                    {article.date}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-cyber-cyan font-orbitron text-sm uppercase tracking-wider hover:text-cyber-pink transition-colors duration-300 cursor-pointer"
                  >
                    Read More →
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00f0ff" }}
            className="px-8 py-4 bg-transparent cyber-border text-cyber-cyan font-orbitron uppercase tracking-wider cursor-pointer hover:bg-cyber-cyan hover:text-black transition-all duration-300"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;