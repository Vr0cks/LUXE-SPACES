import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Leaf, Lightbulb, Award } from 'lucide-react';

const Philosophy = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const values = [
    {
      icon: Heart,
      title: 'Beauty',
      description: 'Every space should inspire and delight the senses'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing boundaries with creative design solutions'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Responsible design for a better tomorrow'
    },
    {
      icon: Award,
      title: 'Functionality',
      description: 'Form follows function in perfect harmony'
    }
  ];

  const stats = [
    { number: '500+', label: 'Homes Transformed' },
    { number: '15', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Design Awards' }
  ];

  return (
    <section id="philosophy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6">
              Our Design
              <span className="block text-gold">Philosophy</span>
            </h2>
            
            <p className="text-lg text-warmGray mb-8 leading-relaxed">
              "Design is not just what it looks like and feels like. Design is how it works." 
              We believe that exceptional interior design goes beyond aesthetics—it creates 
              experiences that enhance how you live, work, and feel in your space.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ y: 30, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-charcoal mb-1">
                      {value.title}
                    </h3>
                    <p className="text-warmGray text-sm">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl font-playfair font-bold text-gold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-warmGray font-inter">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Interior design philosophy"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              
              {/* Floating Quote */}
              <div className="absolute bottom-8 left-8 right-8">
                <blockquote className="text-white text-lg font-cormorant italic">
                  "The details are not the details. They make the design."
                </blockquote>
                <cite className="text-white/80 text-sm font-inter mt-2 block">
                  — Charles Eames
                </cite>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -right-8 w-24 h-24 border-2 border-gold/30 rounded-full"
            />
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-sage/30 rounded-lg transform rotate-45"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;