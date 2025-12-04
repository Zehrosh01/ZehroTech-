import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import PortfolioCard from '../components/PortfolioCard';
import Input, { Textarea } from '../components/Input';
import { servicesData } from '../data/servicesData';
import { portfolioData } from '../data/portfolioData';
import { FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';
// import { send } from '@emailjs/browser';
import emailjs from '@emailjs/browser';

const Home = () => {
  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init('TzQ5fV1oWUHU71P4t'); // Replace with your public key
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Now you don't need to pass public key in send()
      const result = await emailjs.send(
        'service_1ohcc6s',      // Replace
        'template_c6n4a0h',     // Replace
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_name: 'Zehrosh Technologies',
        }
      );

      console.log('SUCCESS!', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      alert('✅ Thank you! We will contact you soon.');
    } catch (error) {
      console.error('FAILED...', error);
      setSubmitStatus('error');
      alert('❌ Oops! Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg"></div>
          <div className="absolute inset-0 opacity-10"
               style={{
                 backgroundImage: `radial-gradient(circle at 2px 2px, rgba(93, 255, 143, 0.3) 1px, transparent 1px)`,
                 backgroundSize: '40px 40px'
               }}>
          </div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[100px] animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-8"
            >
              {/* <img
                src={ztlogo}
                alt="Zehrosh Technologies"
                className="h-24 w-24 mx-auto drop-shadow-[0_0_30px_rgba(93,255,143,0.8)] animate-float"
              /> */}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-neon-green to-neon-blue bg-clip-text text-transparent">
                Empowering Businesses
              </span>
              <br />
              <span className="text-white">with Smart, High-Converting Websites</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-text mb-10 max-w-3xl mx-auto"
            >
              From boutiques to salons, we bring your store online with modern design, 
              seamless functionality, and digital excellence. <br />
              <span className='text-xl text-neon-green'>Stand out. Get customers. Grow your business online.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button href="#contact" variant="primary" className="text-lg px-8 py-4">
                Get Started with Zehrosh
              </Button>
              <Button href="#portfolio" variant="outline" className="text-lg px-8 py-4">
                View Our Work
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              {/* <div className="w-6 h-10 border-2 border-neon-green/50 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-neon-green rounded-full mt-2"
                ></motion.div>
              </div> */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-dark-secondary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Who We <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">Are</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-blue mx-auto mb-8"></div>
            <p className="text-gray-text text-lg max-w-3xl mx-auto leading-relaxed">
              {/* Zehrosh Technologies is dedicated to helping small and medium businesses establish a powerful 
              digital presence. We specialize in creating clean, modern websites with exceptional UI/UX, 
              e-commerce platforms, salon management systems, and boutique catalog websites that drive growth 
              and customer engagement. */}
              Zehrosh Technologies is dedicated to empowering small and medium businesses with world-class digital solutions.
              We specialize in crafting modern websites, mobile-friendly web apps, e-commerce platforms, salon management systems,
              boutique catalog websites, and blogging portals that elevate your brand’s online identity.
              <br />  With a strong focus on UI/UX, speed, performance, and conversions, we help businesses strengthen their digital presence and attract more customers.
              Our mission is to make premium digital experiences accessible, affordable, and impactful for every business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: '💰', title: 'Affordable Pricing', desc: 'Budget-friendly solutions for SMBs' },
              { icon: '⚡', title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality' },
              { icon: '🎨', title: 'Custom Design', desc: 'Tailored to your brand identity' },
              { icon: '🛠️', title: 'Ongoing Support', desc: '24/7 maintenance and updates' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-dark-bg border border-gray-800 rounded-xl p-6 text-center 
                         hover:border-neon-green/50 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-text text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-dark-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-blue mx-auto mb-8"></div>
            <p className="text-gray-text text-lg max-w-3xl mx-auto">
              {/* Comprehensive digital solutions designed to transform your business and elevate your online presence. */}
              Transforming businesses with modern, scalable, and high-performance digital solutions crafted for the future.

              <br /><br />We provide end-to-end web, app, and e-commerce development services that help brands grow online, attract customers, and build trust. Whether you're a boutique, salon, retail shop, or emerging startup,
               we create digital experiences that elevate your presence and accelerate your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">Zehrosh</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-blue mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
                { 
                  title: 'Affordable Pricing', 
                  desc: 'High-quality digital solutions at rates tailored for small businesses, startups, and growing brands.' 
                },
                { 
                  title: 'Custom-Tailored Designs', 
                  desc: 'Every project is built from scratch with a unique design that reflects your brand identity and goals.' 
                },
                { 
                  title: 'Fast Delivery', 
                  desc: 'Streamlined development workflow ensures rapid delivery without sacrificing performance or quality.' 
                },
                { 
                  title: 'Ongoing Support', 
                  desc: 'Continuous updates, maintenance, and post-launch support to keep your website running flawlessly.' 
                },
                { 
                  title: 'Clean Modern UI', 
                  desc: 'Sleek, intuitive, and futuristic interfaces that enhance usability and increase customer engagement.' 
                },
                { 
                  title: 'Scalable Solutions', 
                  desc: 'Whether you’re starting small or planning big, our solutions are designed to grow with your business.' 
                },
                { 
                  title: 'SEO & Performance Optimized', 
                  desc: 'Every website is built with search-friendly structure and lightning-fast loading for maximum visibility.' 
                },
                { 
                  title: 'Fully Responsive Design', 
                  desc: 'Your website looks perfect on all devices—mobiles, tablets, and desktops—without any compromise.' 
                },
                { 
                  title: 'Secure & Reliable', 
                  desc: 'Strong security practices, safe integrations, and reliable architecture to protect your digital presence.' 
                },
                { 
                  title: 'Business-Focused Approach', 
                  desc: 'We create websites that don’t just look good—they help drive sales, build trust, and attract customers.' 
                },
                { 
                  title: 'AI-Enhanced Capabilities', 
                  desc: 'Optional AI features like chatbots, smart recommendations, and automation to future-proof your business.' 
                },
                { 
                  title: 'Easy-to-Manage Admin', 
                  desc: 'Simple management dashboards so you can update products, content, and services without technical skills.' 
                },
              // { title: 'Affordable Pricing', desc: 'Premium quality at prices that work for small businesses and startups.' },
              // { title: 'Custom-Tailored Designs', desc: 'Every project is unique, reflecting your brand personality and values.' },
              // { title: 'Fast Delivery', desc: 'We respect deadlines and deliver projects on time without compromising quality.' },
              // { title: 'Ongoing Support', desc: 'Post-launch support, updates, and maintenance to keep your site running smoothly.' },
              // { title: 'Clean Modern UI', desc: 'Beautiful, intuitive interfaces that enhance user experience and drive conversions.' },
              // { title: 'Scalable Solutions', desc: 'Build for today, scale for tomorrow. Our solutions grow with your business.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-neon-green to-neon-blue 
                              rounded-lg flex items-center justify-center text-dark-bg font-bold text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-text">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-dark-bg relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-green/10 rounded-full blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-blue mx-auto mb-8"></div>
            <p className="text-gray-text text-lg max-w-3xl mx-auto">
              {/* Explore our recent projects and see how we've helped businesses transform their digital presence. */}
               Explore the digital experiences we’ve crafted for businesses across different industries.
              <br /> Every project is built with attention to detail, speed, aesthetics, and performance — ensuring your business looks professional and stands out in the digital world.
              <br /><br /> Whether it’s a sleek website, an e-commerce store, or a custom booking system, we create solutions that help businesses attract customers, build trust, and grow online.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.map((project, index) => (
              <PortfolioCard key={project.id} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>
{/* ************************************************************* */}
      {/* Contact Section */}
     <section id="contact" className="py-20 bg-dark-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
             style={{
               backgroundImage: `linear-gradient(rgba(93, 255, 143, 0.1) 1px, transparent 1px), 
                                linear-gradient(90deg, rgba(0, 224, 255, 0.1) 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Build Your{' '}
                <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
                  Digital Future
                </span>{' '}
                Together
              </h2>
              <p className="text-gray-text text-lg mb-8 leading-relaxed">
                Want to take your business online or upgrade your current website? We create clean, modern, and reliable digital solutions that help you look professional and win customer trust.
                <br /><br />
                Share your idea — we'll guide you with honest advice, clear communication, and support at every step.
              </p>
              
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-green/10 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-neon-green text-xl" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email Us</p>
                    <a 
                      href="mailto:zehrotech@outlook.com" 
                      className="text-gray-text hover:text-neon-green transition-colors"
                    >
                      zehrotech@outlook.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-blue/10 rounded-lg flex items-center justify-center">
                    <FaPhone className="text-neon-blue text-xl" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Call Us</p>
                    <a 
                      href="tel:+919168597707" 
                      className="text-gray-text hover:text-neon-blue transition-colors"
                    >
                      +91 9168597707
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-green/10 rounded-lg flex items-center justify-center">
                    <FaGlobe className="text-neon-green text-xl" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Visit Us Online</p>
                    <a 
                      href="https://zehrotech.ai" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-text hover:text-neon-green transition-colors"
                    >
                      zehrotech.ai
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-dark-bg border border-gray-800 rounded-2xl p-8 hover:border-neon-green/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Your Name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
                <Textarea
                  label="Your Message"
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  disabled={isSubmitting}
                />
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Contact Us Today'}
                </Button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <p className="text-neon-green text-center text-sm mt-2">
                    ✅ Message sent successfully! We'll get back to you soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-center text-sm mt-2">
                    ❌ Failed to send. Please email us directly.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
