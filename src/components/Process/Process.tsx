import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Lightbulb, Wrench, Truck, Sparkles } from 'lucide-react';

const Process = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      subtitle: 'Understanding Your Vision',
      duration: '1-2 weeks',
      description: 'We start by getting to know you, your lifestyle, and your design dreams through detailed consultations.',
      activities: ['Initial consultation', 'Lifestyle assessment', 'Budget planning', 'Space analysis'],
      color: 'from-gold/20 to-blush/20'
    },
    {
      icon: Lightbulb,
      title: 'Concept',
      subtitle: 'Creating Your Design DNA',
      duration: '2-3 weeks',
      description: 'Transform ideas into a cohesive design concept with mood boards, color palettes, and preliminary layouts.',
      activities: ['Mood board creation', 'Color scheme development', 'Preliminary layouts', 'Material selection'],
      color: 'from-sage/20 to-cream/20'
    },
    {
      icon: Wrench,
      title: 'Development',
      subtitle: 'Bringing Ideas to Life',
      duration: '3-4 weeks',
      description: 'Detailed planning and design development with 3D renderings, technical drawings, and final selections.',
      activities: ['3D renderings', 'Technical drawings', 'Final material selection', 'Contractor coordination'],
      color: 'from-blush/20 to-gold/20'
    },
    {
      icon: Truck,
      title: 'Implementation',
      subtitle: 'Transforming Your Space',
      duration: '6-12 weeks',
      description: 'Professional execution of the design plan with careful project management and quality oversight.',
      activities: ['Construction coordination', 'Furniture procurement', 'Installation oversight', 'Quality control'],
      color: 'from-sage/20 to-blush/20'
    },
    {
      icon: Sparkles,
      title: 'Reveal',
      subtitle: 'Your Dream Realized',
      duration: '1 day',
      description: 'The magical moment when we unveil your transformed space, styled to perfection and ready to enjoy.',
      activities: ['Final styling', 'Photography session', 'Walkthrough tour', 'Maintenance guide'],
      color: 'from-gold/30 to-sage/20'
    }
  ];

  const testimonials = [
    {
      text: "The process was seamless from start to finish. They truly understood our vision.",
      author: "Sarah Johnson",
      step: 0
    },
    {
      text: "Seeing our ideas come to life in the mood boards was incredible!",
      author: "Michael Chen",
      step: 1
    },
    {
      text: "The 3D renderings helped us visualize everything perfectly.",
      author: "Emma Davis",
      step: 2
    },
    {
      text: "They managed every detail during construction. So professional!",
      author: "Robert Wilson",
      step: 3
    },
    {
      text: "The reveal day was like Christmas morning. Absolutely magical!",
      author: "Lisa Thompson",
      step: 4
    }
  ];

  return (
    <section id="process" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6">
            Your Journey
            <span className="block text-gold">With Us</span>
          </h2>
          <p className="text-lg text-warmGray max-w-3xl mx-auto">
            Our proven 5-step process ensures your design journey is smooth, 
            collaborative, and results in the space of your dreams.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold/30" />

          {/* Process Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mr-4`}>
                      <step.icon className="w-8 h-8 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-playfair font-bold text-charcoal">
                        {step.title}
                      </h3>
                      <p className="text-gold font-inter font-medium">
                        {step.subtitle}
                      </p>
                      <p className="text-sm text-warmGray">
                        Duration: {step.duration}
                      </p>
                    </div>
                  </div>

                  <p className="text-warmGray mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {step.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center text-sm text-charcoal">
                        <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0" />
                        {activity}
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-cream/50 rounded-lg p-4">
                    <p className="text-charcoal italic mb-2">
                      "{testimonials[index].text}"
                    </p>
                    <p className="text-gold font-medium text-sm">
                      — {testimonials[index].author}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:block relative">
                  <div className="w-20 h-20 bg-white border-4 border-gold rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-playfair font-bold text-gold">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Visual/Image */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative overflow-hidden rounded-2xl shadow-lg"
                  >
                    <img
                      src={`https://images.pexels.com/photos/${
                        [1571460, 2724749, 1648776, 380769, 1571453][index]
                      }/pexels-photo-${
                        [1571460, 2724749, 1648776, 380769, 1571453][index]
                      }.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={step.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${step.color}`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-warmGray mb-6">
              Let's start with a conversation about your vision and how we can bring it to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-white px-8 py-4 rounded-full font-montserrat font-semibold hover:bg-gold/90 transition-all duration-300"
            >
              Start Discovery Phase
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;