// import React from 'react';
// import { motion } from 'framer-motion';

// const PortfolioCard = ({ title, category, description, image, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       whileHover={{ y: -8 }}
//       className="bg-dark-secondary rounded-xl overflow-hidden border border-gray-800 
//                hover:border-neon-blue/50 hover:shadow-neon-blue/20 hover:shadow-xl 
//                transition-all duration-300 group cursor-pointer"
//     >
//       <div className="relative h-48 bg-gradient-to-br from-dark-accent to-dark-bg overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-neon-blue/20 
//                       opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <span className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
//             {image || '🎨'}
//           </span>
//         </div>
//         <div className="absolute top-4 left-4 px-3 py-1 bg-dark-bg/80 backdrop-blur-sm rounded-full 
//                       text-xs font-medium text-neon-green border border-neon-green/30">
//           {category}
//         </div>
//       </div>

//       <div className="p-6">
//         <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-blue 
//                      transition-colors duration-300">
//           {title}
//         </h3>
//         <p className="text-gray-text text-sm leading-relaxed">
//           {description}
//         </p>
        
//         <div className="mt-4 flex items-center text-neon-green text-sm font-medium opacity-0 
//                       group-hover:opacity-100 transition-opacity duration-300">
//           View project 
//           <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default PortfolioCard;

import React from 'react';
import { motion } from 'framer-motion';

const PortfolioCard = ({ title, category, description, image, index, link }) => {
  
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={handleClick}
      className="bg-dark-secondary rounded-xl overflow-hidden border border-gray-800 
               hover:border-neon-blue/50 hover:shadow-neon-blue/20 hover:shadow-xl 
               transition-all duration-300 group cursor-pointer"
    >
      <div className="relative h-48 bg-gradient-to-br from-dark-accent to-dark-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-neon-blue/20 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
            {image || '🎨'}
          </span>
        </div>
        <div className="absolute top-4 left-4 px-3 py-1 bg-dark-bg/80 backdrop-blur-sm rounded-full 
                      text-xs font-medium text-neon-green border border-neon-green/30">
          {category}
        </div>
        
        {/* Optional: Show link icon if link exists */}
        {link && (
          <div className="absolute top-4 right-4 w-8 h-8 bg-neon-blue/10 rounded-full 
                        flex items-center justify-center opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300">
            <span className="text-neon-blue text-sm">🔗</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-blue 
                     transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-text text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="mt-4 flex items-center text-neon-green text-sm font-medium opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300">
          {link ? 'View project' : 'Coming soon'}
          <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
