import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-dark-secondary border border-gray-800 rounded-xl p-6 hover:border-neon-green/50 
               hover:shadow-neon-green/20 hover:shadow-lg transition-all duration-300 group"
    >
      <div className="w-16 h-16 bg-dark-accent rounded-lg flex items-center justify-center mb-4 
                    group-hover:bg-neon-green/10 transition-colors duration-300">
        <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neon-green 
                   transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-text leading-relaxed text-sm">
        {description}
      </p>

      <div className="mt-4 flex items-center text-neon-blue text-sm font-medium opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300">
        Learn more 
        <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
