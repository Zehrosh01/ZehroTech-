// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import ztlogo from '../assets/ztlogo.jpg'

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', path: '/', hash: '' },
//     { name: 'About', path: '/', hash: '#about' },
//     { name: 'Services', path: '/', hash: '#services' },
//     { name: 'Portfolio', path: '/', hash: '#portfolio' },
//     { name: 'Contact', path: '/', hash: '#contact' },
//   ];

//   const handleNavClick = (hash) => {
//     setIsMobileMenuOpen(false);
//     if (hash) {
//       setTimeout(() => {
//         const element = document.querySelector(hash);
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }, 100);
//     }
//   };

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-dark-bg/95 backdrop-blur-md shadow-lg shadow-neon-green/10' : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           <Link to="/" className="flex items-center space-x-3 group">
//             <motion.img
//               whileHover={{ scale: 1.05, rotate: 5 }}
//               src={ztlogo}
//               alt="Zehrosh Technologies"
//               className="h-12 w-12 object-contain drop-shadow-[0_0_10px_rgba(93,255,143,0.6)] 
//                          group-hover:drop-shadow-[0_0_20px_rgba(93,255,143,0.9)] transition-all duration-300"
//             />
//             <span className="text-xl font-bold bg-gradient-to-r from-neon-green to-neon-blue 
//                            bg-clip-text text-transparent hidden sm:block">
//               Zehrosh Technologies
//             </span>
//           </Link>

//           <div className="hidden md:flex items-center space-x-1">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 onClick={() => handleNavClick(link.hash)}
//                 className="px-4 py-2 rounded-lg text-gray-text hover:text-neon-green 
//                          transition-all duration-300 relative group"
//               >
//                 {link.name}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-green 
//                                to-neon-blue group-hover:w-full transition-all duration-300"></span>
//               </Link>
//             ))}
//             <motion.a
//               href="#contact"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="ml-4 px-6 py-2 rounded-lg bg-gradient-to-r from-neon-green to-neon-blue 
//                        text-dark-bg font-semibold hover:shadow-neon-mix transition-all duration-300"
//             >
//               Get Started
//             </motion.a>
//           </div>

//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden p-2 rounded-lg text-gray-text hover:text-neon-green transition-colors"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {isMobileMenuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {isMobileMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: 'auto' }}
//           className="md:hidden bg-dark-secondary/95 backdrop-blur-md border-t border-neon-green/20"
//         >
//           <div className="px-4 py-4 space-y-2">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 onClick={() => handleNavClick(link.hash)}
//                 className="block px-4 py-2 rounded-lg text-gray-text hover:text-neon-green 
//                          hover:bg-dark-accent transition-all duration-300"
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <a
//               href="#contact"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="block text-center px-4 py-2 rounded-lg bg-gradient-to-r from-neon-green 
//                        to-neon-blue text-dark-bg font-semibold"
//             >
//               Get Started
//             </a>
//           </div>
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ztlogo from '../assets/ztlogo.jpg'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', hash: '' },
    { name: 'About', path: '/', hash: '#about' },
    { name: 'Services', path: '/', hash: '#services' },
    { name: 'Portfolio', path: '/', hash: '#portfolio' },
    { name: 'Contact', path: '/', hash: '#contact' },
  ];

  const handleNavClick = (hash) => {
    setIsMobileMenuOpen(false);
    
    if (hash) {
      // Scroll to specific section
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Scroll to top (for Home)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-bg/95 backdrop-blur-md shadow-lg shadow-neon-green/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Also scrolls to top when clicked */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 group"
          >
            <motion.img
              whileHover={{ scale: 1.05, rotate: 5 }}
              src={ztlogo}
              alt="Zehrosh Technologies"
              className="h-12 w-12 object-contain drop-shadow-[0_0_10px_rgba(93,255,143,0.6)] 
                         group-hover:drop-shadow-[0_0_20px_rgba(93,255,143,0.9)] transition-all duration-300"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-neon-green to-neon-blue 
                           bg-clip-text text-transparent hidden sm:block">
              Zehrosh Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.hash)}
                className="px-4 py-2 rounded-lg text-gray-text hover:text-neon-green 
                         transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-green 
                               to-neon-blue group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 rounded-lg bg-gradient-to-r from-neon-green to-neon-blue 
                       text-dark-bg font-semibold hover:shadow-neon-mix transition-all duration-300"
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-text hover:text-neon-green transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-dark-secondary/95 backdrop-blur-md border-t border-neon-green/20"
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.hash)}
                className="block px-4 py-2 rounded-lg text-gray-text hover:text-neon-green 
                         hover:bg-dark-accent transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="block text-center px-4 py-2 rounded-lg bg-gradient-to-r from-neon-green 
                       to-neon-blue text-dark-bg font-semibold"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
