import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ztlogo from '../assets/ztlogo.jpg';
import { FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin/>, url: 'https://www.linkedin.com/in/zehrosh-sheikh-507b01231'},
    { name: 'Instagram', icon: <FaInstagram/>, url: 'https://www.instagram.com/zehrotech.ai?igsh=ZHFsZjFmM2g4cW56' },
    { name: 'WhatsApp', icon: <FaWhatsapp/>, url: 'https://wa.me/91xxxxxxxxxx' },
    { name: 'Youtube', icon: <FaYoutube/>, url: '#' },
  ];

  const quickLinks = [
    { name: 'About Us', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Portfolio', path: '/#portfolio' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <footer className="bg-dark-secondary border-t border-neon-green/20 relative">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent 
                    via-neon-green to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={ztlogo}
                alt="Zehrosh Technologies"
                className="h-12 w-12 object-contain drop-shadow-[0_0_10px_rgba(93,255,143,0.6)]"
              />
              <span className="text-lg font-bold bg-gradient-to-r from-neon-green to-neon-blue 
                             bg-clip-text text-transparent">
                Zehrosh Technologies
              </span>
            </Link>
            <p className="text-gray-text text-sm leading-relaxed">
              Empowering small and medium businesses with cutting-edge digital solutions. 
              From boutiques to salons, we bring your vision online.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-neon-green font-semibold">zehrotech.ai</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-gray-text hover:text-neon-green transition-colors duration-300 
                             text-sm flex items-center group"
                  >
                    <span className="mr-2 text-neon-blue group-hover:translate-x-1 transition-transform">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 rounded-full bg-dark-accent flex items-center justify-center 
                           text-gray-text hover:text-neon-green hover:shadow-neon-green transition-all duration-300"
                  aria-label={social.name}
                >
                  <span className="text-xl font-bold">{social.icon}</span>
                </motion.a>
              ))}
            </div>
            {/* <p className="text-gray-text text-sm">
              <span className="text-neon-blue">Email:</span> contact@zehrotech.ai
            </p>
            <p className="text-gray-text text-sm mt-2">
              <span className="text-neon-blue">Phone:</span> +91 XXX XXX XXXX
            </p> */}
            <p className="text-gray-text text-sm">
                <span className="text-neon-blue">Email:</span>
                <a href="mailto:contact@zehrotech.ai" className="hover:text-neon-green ml-1">
                    zehrotech@outlook.com
                </a>
            </p>

            <p className="text-gray-text text-sm mt-2">
                <span className="text-neon-blue">Phone:</span>
                <a href="tel:+919876543210" className="hover:text-neon-green ml-1">
                    +91 9168597707
                </a>
            </p>

          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-text">
            <p>© {currentYear} Zehrosh Technologies. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-neon-green transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-neon-green transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
