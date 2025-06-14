import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, MapPin, Phone, Mail, Upload, DollarSign } from 'lucide-react';

const Consultation = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    consultationType: 'in-home',
    message: '',
    photos: []
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const services = [
    {
      type: 'in-home',
      title: 'In-Home Consultation',
      duration: '2-3 hours',
      price: '$150',
      description: 'Comprehensive assessment of your space with detailed recommendations',
      features: ['Space analysis', 'Style assessment', 'Preliminary suggestions', 'Measurement guide']
    },
    {
      type: 'virtual',
      title: 'Virtual Consultation',
      duration: '1 hour',
      price: '$75',
      description: 'Online consultation via video call with room analysis',
      features: ['Video walkthrough', 'Photo analysis', 'Design direction', 'Shopping list']
    }
  ];

  const projectTypes = [
    'Full Home Design', 'Single Room', 'Kitchen Renovation', 'Bathroom Redesign', 
    'Office Space', 'Commercial Project', 'Furniture Selection', 'Color Consultation'
  ];

  const budgetRanges = [
    'Under $10K', '$10K - $25K', '$25K - $50K', '$50K - $100K', '$100K - $250K', '$250K+'
  ];

  const timelineOptions = [
    'ASAP', '1-3 months', '3-6 months', '6-12 months', '12+ months', 'Still planning'
  ];

  return (
    <section id="consultation" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6">
            Start Your
            <span className="block text-gold">Transformation</span>
          </h2>
          <p className="text-lg text-warmGray max-w-3xl mx-auto">
            Ready to create your dream space? Book a consultation and let's discuss how we can transform your vision into reality.
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12">
          {/* Service Options */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-playfair font-bold text-charcoal mb-8">
              Choose Your Consultation Type
            </h3>
            
            <div className="space-y-6 mb-8">
              {services.map((service) => (
                <motion.div
                  key={service.type}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    formData.consultationType === service.type
                      ? 'border-gold bg-gold/5'
                      : 'border-gray-200 bg-white hover:border-gold/50'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, consultationType: service.type }))}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-playfair font-semibold text-charcoal mb-1">
                        {service.title}
                      </h4>
                      <div className="flex items-center text-warmGray text-sm mb-2">
                        <Clock size={16} className="mr-2" />
                        {service.duration}
                        <span className="mx-3">•</span>
                        <DollarSign size={16} className="mr-1" />
                        {service.price}
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 ${
                      formData.consultationType === service.type
                        ? 'border-gold bg-gold'
                        : 'border-gray-300'
                    }`} />
                  </div>
                  
                  <p className="text-warmGray mb-4">
                    {service.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-charcoal">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Instant Quote Calculator */}
            <div className="bg-cream/50 rounded-2xl p-6">
              <h4 className="text-lg font-playfair font-semibold text-charcoal mb-4">
                Instant Quote Calculator
              </h4>
              <div className="space-y-4">
                <div>
                  <select
                    value={formData.projectType}
                    onChange={handleInputChange}
                    name="projectType"
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <select
                    value={formData.budget}
                    onChange={handleInputChange}
                    name="budget"
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
                {formData.projectType && formData.budget && (
                  <div className="bg-white rounded-lg p-4 border-l-4 border-gold">
                    <p className="text-charcoal font-medium">Estimated Timeline: 6-12 weeks</p>
                    <p className="text-sm text-warmGray">Based on your selections</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-cream/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-playfair font-bold text-charcoal mb-6">
              Book Your Consultation
            </h3>
            
            <form className="space-y-6">
              {/* Personal Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-montserrat font-medium text-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-montserrat font-medium text-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-montserrat font-medium text-charcoal mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-sm font-montserrat font-medium text-charcoal mb-2">
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold"
                >
                  <option value="">When do you want to start?</option>
                  {timelineOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-montserrat font-medium text-charcoal mb-2">
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold resize-none"
                  placeholder="Describe your vision, style preferences, and any specific requirements..."
                />
              </div>

              {/* Photo Upload */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gold transition-colors duration-300">
                <Upload className="w-8 h-8 text-warmGray mx-auto mb-2" />
                <p className="text-charcoal font-medium mb-1">Upload Photos of Your Space</p>
                <p className="text-sm text-warmGray">
                  Help us understand your current space (optional)
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  id="photos"
                />
                <label
                  htmlFor="photos"
                  className="mt-3 inline-block bg-white text-charcoal px-4 py-2 rounded-lg border border-gray-200 hover:border-gold cursor-pointer transition-colors duration-200"
                >
                  Choose Files
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gold text-white py-4 rounded-lg font-montserrat font-semibold hover:bg-gold/90 transition-all duration-300"
              >
                Book Consultation
              </motion.button>

              <p className="text-xs text-warmGray text-center">
                By submitting this form, you agree to our terms and privacy policy. 
                We'll contact you within 24 hours to confirm your appointment.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 bg-charcoal rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-gold mx-auto mb-4" />
              <h4 className="font-playfair font-semibold mb-2">Call Us</h4>
              <p>(555) 123-4567</p>
              <p className="text-sm text-white/70">Mon-Fri 9AM-6PM</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-gold mx-auto mb-4" />
              <h4 className="font-playfair font-semibold mb-2">Email Us</h4>
              <p>hello@luxespaces.com</p>
              <p className="text-sm text-white/70">We respond within 4 hours</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
              <h4 className="font-playfair font-semibold mb-2">Visit Our Studio</h4>
              <p>123 Design District</p>
              <p className="text-sm text-white/70">By appointment only</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Consultation;