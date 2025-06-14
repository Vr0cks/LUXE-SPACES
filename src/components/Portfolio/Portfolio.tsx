import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const categories = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Bathroom', 'Office'];

  const projects = [
    {
      id: 1,
      title: 'Modern Minimalist Living',
      category: 'Living Room',
      style: 'Contemporary',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      budget: '$50K - $75K',
      timeline: '8 weeks'
    },
    {
      id: 2,
      title: 'Luxury Kitchen Design',
      category: 'Kitchen',
      style: 'Modern Luxury',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      budget: '$75K - $100K',
      timeline: '12 weeks'
    },
    {
      id: 3,
      title: 'Serene Master Bedroom',
      category: 'Bedroom',
      style: 'Scandinavian',
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
      budget: '$25K - $40K',
      timeline: '6 weeks'
    },
    {
      id: 4,
      title: 'Executive Office Suite',
      category: 'Office',
      style: 'Industrial Modern',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
      budget: '$30K - $50K',
      timeline: '7 weeks'
    },
    {
      id: 5,
      title: 'Spa-Inspired Bathroom',
      category: 'Bathroom',
      style: 'Contemporary Zen',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      budget: '$40K - $60K',
      timeline: '10 weeks'
    },
    {
      id: 6,
      title: 'Cozy Living Space',
      category: 'Living Room',
      style: 'Bohemian Modern',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      budget: '$35K - $50K',
      timeline: '6 weeks'
    },
    {
      id: 7,
      title: 'Gourmet Kitchen',
      category: 'Kitchen',
      style: 'Transitional',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      budget: '$60K - $85K',
      timeline: '14 weeks'
    },
    {
      id: 8,
      title: 'Kids Bedroom Paradise',
      category: 'Bedroom',
      style: 'Playful Modern',
      image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800',
      budget: '$15K - $25K',
      timeline: '4 weeks'
    },
    {
      id: 9,
      title: 'Luxury Master Bath',
      category: 'Bathroom',
      style: 'Classic Luxury',
      image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
      budget: '$55K - $80K',
      timeline: '12 weeks'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % filteredProjects.length);
    }
  };

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage - 1 + filteredProjects.length) % filteredProjects.length);
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6">
            Our
            <span className="block text-gold">Masterpieces</span>
          </h2>
          <p className="text-lg text-warmGray max-w-3xl mx-auto">
            Explore our curated collection of transformative spaces, 
            each telling a unique story of design excellence.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-montserrat font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gold text-white shadow-lg'
                  : 'bg-cream text-charcoal hover:bg-gold hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div ref={ref} className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setLightboxImage(index)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <ZoomIn className="w-8 h-8 mx-auto mb-3" />
                      <h3 className="text-xl font-playfair font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gold mb-1">{project.style}</p>
                      <p className="text-xs text-white/80">{project.timeline}</p>
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-white font-playfair font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gold text-sm font-inter">
                      {project.category} • {project.style}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              <div className="relative max-w-4xl max-h-full">
                <motion.img
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  src={filteredProjects[lightboxImage].image}
                  alt={filteredProjects[lightboxImage].title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
                
                {/* Close Button */}
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-4 right-4 text-white hover:text-gold transition-colors duration-200"
                >
                  <X size={32} />
                </button>

                {/* Navigation */}
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-colors duration-200"
                >
                  <ChevronLeft size={48} />
                </button>
                
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-colors duration-200"
                >
                  <ChevronRight size={48} />
                </button>

                {/* Project Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white">
                  <h3 className="text-xl font-playfair font-semibold mb-2">
                    {filteredProjects[lightboxImage].title}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gold">Category:</span>
                      <p>{filteredProjects[lightboxImage].category}</p>
                    </div>
                    <div>
                      <span className="text-gold">Style:</span>
                      <p>{filteredProjects[lightboxImage].style}</p>
                    </div>
                    <div>
                      <span className="text-gold">Timeline:</span>
                      <p>{filteredProjects[lightboxImage].timeline}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;