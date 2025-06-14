import React from 'react';
import { motion } from 'framer-motion';
import { Home, Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#philosophy' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Team', href: '#team' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#consultation' }
  ];

  const services = [
    'Residential Design',
    'Commercial Spaces',
    'Furniture Curation',
    'Art Consultation',
    'Space Planning',
    'Sustainable Design'
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/luxespaces', name: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/luxespaces', name: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com/company/luxespaces', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 mb-6"
            >
              <Home className="h-8 w-8 text-gold" />
              <span className="text-2xl font-playfair font-bold">LUXE SPACES</span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-white/80 mb-6 leading-relaxed max-w-md"
            >
              Creating spaces that inspire living through thoughtful design, premium craftsmanship, 
              and unparalleled attention to detail. Transform your space into a masterpiece.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-3"
            >
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gold mr-3" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gold mr-3" />
                <span>hello@luxespaces.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gold mr-3" />
                <span>123 Design District, City, State 12345</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-lg font-playfair font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors duration-200 font-inter"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-lg font-playfair font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/70 font-inter">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white/5 rounded-2xl p-8 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Stay Inspired
            </h3>
            <p className="text-white/80 mb-6">
              Subscribe to our newsletter for the latest design trends, exclusive tips, and project updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-gold"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold text-white px-6 py-3 rounded-lg font-montserrat font-medium hover:bg-gold/90 transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Social & Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center space-x-6 mb-4 md:mb-0"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:text-gold hover:bg-gold/20 transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col md:flex-row items-center text-white/60 text-sm"
            >
              <div className="flex items-center mb-2 md:mb-0">
                <span>© 2025 LUXE SPACES. All rights reserved.</span>
              </div>
              <div className="flex items-center md:ml-6">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-gold mx-1" />
                <span>for beautiful spaces</span>
              </div>
            </motion.div>
          </div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 pt-6 border-t border-white/10"
          >
            <a href="#" className="text-white/60 hover:text-gold transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-gold transition-colors duration-200 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-gold transition-colors duration-200 text-sm">
              Cookie Policy
            </a>
            <a href="#" className="text-white/60 hover:text-gold transition-colors duration-200 text-sm">
              Accessibility
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;