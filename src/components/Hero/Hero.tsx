import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Modern Minimalism',
      description: 'Clean lines meet warm textures'
    },
    {
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Luxurious Living',
      description: 'Elegance in every detail'
    },
    {
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Timeless Sophistication',
      description: 'Where comfort meets style'
    },
    {
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Contemporary Charm',
      description: 'Thoughtful design for modern living'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border border-gold/30 rounded-full"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-20 w-16 h-16 bg-gold/20 rounded-lg transform rotate-45"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight"
          >
            Creating Spaces That
            <span className="block text-gold">Inspire Living</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-2xl font-inter font-light mb-8 max-w-2xl mx-auto"
          >
            Transform your space into a masterpiece of design, comfort, and functionality
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-gold/90 transition-colors duration-300"
            >
              Start Your Journey
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-white hover:text-charcoal transition-all duration-300 flex items-center gap-2"
            >
              <Play size={20} />
              View Portfolio
            </motion.button>
          </motion.div>

          {/* Current Slide Info */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-playfair font-semibold mb-2">
              {slides[currentSlide].title}
            </h3>
            <p className="text-lg font-inter font-light text-white/80">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-colors duration-200 z-20"
      >
        <ChevronLeft size={48} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-colors duration-200 z-20"
      >
        <ChevronRight size={48} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-gold' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="w-px h-16 bg-white/50 mx-auto mb-2" />
        <p className="text-sm font-inter">Scroll to explore</p>
      </motion.div>
    </section>
  );
};

export default Hero;