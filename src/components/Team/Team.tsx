import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Instagram, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const team = [
    {
      name: 'Alexandra Sterling',
      title: 'Principal Designer & Founder',
      specialties: ['Luxury Residential', 'Modern Minimalism', 'Sustainable Design'],
      philosophy: '"Design should be a reflection of who you are, not a trend you follow."',
      experience: '12 years',
      awards: ['Interior Design Excellence Award 2023', 'Sustainable Design Recognition'],
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        instagram: '@alex_sterling_design',
        linkedin: 'alexandra-sterling',
        email: 'alex@luxespaces.com'
      }
    },
    {
      name: 'Marcus Chen',
      title: 'Senior Interior Architect',
      specialties: ['Commercial Spaces', 'Space Planning', 'Contemporary Design'],
      philosophy: '"Great design is invisible—it just works perfectly for how you live."',
      experience: '9 years',
      awards: ['Commercial Design Award 2022', 'Innovation in Architecture'],
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        instagram: '@marcus_designs',
        linkedin: 'marcus-chen-design',
        email: 'marcus@luxespaces.com'
      }
    },
    {
      name: 'Sofia Rodriguez',
      title: 'Color & Materials Specialist',
      specialties: ['Color Psychology', 'Textile Design', 'Art Curation'],
      philosophy: '"Color is the language of emotion—it tells your story without words."',
      experience: '7 years',
      awards: ['Color Design Excellence 2023', 'Textile Innovation Award'],
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        instagram: '@sofia_colors',
        linkedin: 'sofia-rodriguez-design',
        email: 'sofia@luxespaces.com'
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6">
            Design
            <span className="block text-gold">Visionaries</span>
          </h2>
          <p className="text-lg text-warmGray max-w-3xl mx-auto">
            Meet the creative minds behind LUXE SPACES—talented designers who bring 
            passion, expertise, and innovation to every project.
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Profile Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Icons */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={`https://instagram.com/${member.social.instagram.substring(1)}`}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-charcoal hover:text-gold transition-colors duration-200"
                    >
                      <Instagram size={18} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={`https://linkedin.com/in/${member.social.linkedin}`}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-charcoal hover:text-gold transition-colors duration-200"
                    >
                      <Linkedin size={18} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-charcoal hover:text-gold transition-colors duration-200"
                    >
                      <Mail size={18} />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-playfair font-bold text-charcoal mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gold font-inter font-medium">
                      {member.title}
                    </p>
                    <p className="text-sm text-warmGray">
                      {member.experience} experience
                    </p>
                  </div>

                  {/* Philosophy Quote */}
                  <blockquote className="text-charcoal italic mb-4 font-cormorant text-lg">
                    {member.philosophy}
                  </blockquote>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-sm font-montserrat font-semibold text-charcoal mb-2">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-inter"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Awards */}
                  <div>
                    <h4 className="text-sm font-montserrat font-semibold text-charcoal mb-2 flex items-center">
                      <Award size={16} className="mr-1 text-gold" />
                      Awards & Recognition:
                    </h4>
                    <ul className="space-y-1">
                      {member.awards.map((award, idx) => (
                        <li key={idx} className="text-xs text-warmGray flex items-start">
                          <div className="w-1 h-1 bg-gold rounded-full mt-2 mr-2 flex-shrink-0" />
                          {award}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 w-full bg-charcoal text-white py-3 rounded-lg font-montserrat font-medium hover:bg-gold transition-colors duration-300"
                  >
                    Connect with {member.name.split(' ')[0]}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-gold/10 to-sage/10 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-playfair font-bold text-gold mb-2">28+</div>
              <div className="text-charcoal font-inter">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-gold mb-2">15+</div>
              <div className="text-charcoal font-inter">Design Awards</div>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-gold mb-2">500+</div>
              <div className="text-charcoal font-inter">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-gold mb-2">98%</div>
              <div className="text-charcoal font-inter">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-warmGray mb-6">
            Ready to work with our talented team? Let's create something beautiful together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-white px-8 py-4 rounded-full font-montserrat font-semibold hover:bg-gold/90 transition-all duration-300"
          >
            Meet the Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;