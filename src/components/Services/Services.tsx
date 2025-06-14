import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home, Building, Sofa, Palette, Layout, Leaf } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      subtitle: 'Your Dream Home',
      description: 'Complete home transformations that reflect your personal style and enhance your lifestyle.',
      features: ['Full home design', 'Room-by-room planning', 'Custom furniture selection', '3D visualization'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-gold/20 to-blush/20'
    },
    {
      icon: Building,
      title: 'Commercial Spaces',
      subtitle: 'Inspiring Workplaces',
      description: 'Professional environments that boost productivity and leave lasting impressions.',
      features: ['Office design', 'Retail spaces', 'Restaurant interiors', 'Brand integration'],
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-sage/20 to-cream/20'
    },
    {
      icon: Sofa,
      title: 'Furniture Curation',
      subtitle: 'Handpicked Pieces',
      description: 'Carefully selected furniture that perfectly complements your space and lifestyle.',
      features: ['Custom pieces', 'Vintage finds', 'Designer collaborations', 'Perfect fit guarantee'],
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-blush/20 to-gold/20'
    },
    {
      icon: Palette,
      title: 'Art Consultation',
      subtitle: 'Curated Collections',
      description: 'Art selection and placement that transforms walls into captivating focal points.',
      features: ['Art sourcing', 'Gallery walls', 'Sculpture placement', 'Lighting design'],
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-sage/20 to-blush/20'
    },
    {
      icon: Layout,
      title: 'Space Planning',
      subtitle: 'Optimized Layouts',
      description: 'Maximize functionality and flow with strategic space planning and layout design.',
      features: ['Traffic flow analysis', 'Furniture placement', 'Storage solutions', 'Multi-functional design'],
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-gold/20 to-sage/20'
    },
    {
      icon: Leaf,
      title: 'Sustainable Design',
      subtitle: 'Eco-Luxury Living',
      description: 'Beautiful, responsible design using sustainable materials and eco-friendly practices.',
      features: ['Eco-friendly materials', 'Energy efficiency', 'Indoor air quality', 'Sustainable sourcing'],
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-sage/30 to-cream/20'
    }
  ];

  return (
    <section id="services" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6">
            What We
            <span className="block text-gold">Create</span>
          </h2>
          <p className="text-lg text-warmGray max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive design services 
            tailored to transform your vision into reality.
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} group-hover:opacity-80 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-gold" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-playfair font-semibold text-charcoal mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gold font-inter font-medium text-sm">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-warmGray mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-warmGray">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-charcoal text-white py-3 rounded-lg font-montserrat font-medium hover:bg-gold transition-colors duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-warmGray mb-6">
            Ready to transform your space? Let's discuss your vision.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-white px-8 py-4 rounded-full font-montserrat font-semibold hover:bg-gold/90 transition-all duration-300"
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;