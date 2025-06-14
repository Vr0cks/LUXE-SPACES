import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, ChevronLeft, Mail, Download } from 'lucide-react';

const Quiz = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [email, setEmail] = useState('');

  const questions = [
    {
      question: "What's your ideal living space vibe?",
      options: [
        { text: "Clean, minimal, and serene", style: "Minimalist", image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300" },
        { text: "Warm, layered, and eclectic", style: "Bohemian", image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=300" },
        { text: "Sleek, modern, and sophisticated", style: "Contemporary", image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=300" },
        { text: "Raw, urban, and edgy", style: "Industrial", image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=300" }
      ]
    },
    {
      question: "Which color palette speaks to you?",
      options: [
        { text: "Whites, grays, and natural wood", style: "Scandinavian", image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=300" },
        { text: "Rich jewel tones and metallics", style: "Luxe", image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=300" },
        { text: "Earthy terracotta and sage", style: "Bohemian", image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=300" },
        { text: "Bold blacks and statement colors", style: "Modern", image: "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=300" }
      ]
    },
    {
      question: "What's your approach to furniture?",
      options: [
        { text: "Investment pieces that last forever", style: "Classic", image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=300" },
        { text: "Mix of vintage finds and new pieces", style: "Eclectic", image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300" },
        { text: "Functional, multi-purpose, smart", style: "Contemporary", image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=300" },
        { text: "Handcrafted, artisanal, unique", style: "Artisan", image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=300" }
      ]
    },
    {
      question: "How do you like to entertain?",
      options: [
        { text: "Intimate dinner parties", style: "Elegant", image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=300" },
        { text: "Casual gatherings with friends", style: "Relaxed", image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=300" },
        { text: "Large parties and celebrations", style: "Grand", image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=300" },
        { text: "Cozy nights in", style: "Cozy", image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=300" }
      ]
    },
    {
      question: "What's most important in your home?",
      options: [
        { text: "Comfort and relaxation", style: "Comfortable", image: "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=300" },
        { text: "Organization and efficiency", style: "Organized", image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=300" },
        { text: "Beauty and aesthetics", style: "Aesthetic", image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300" },
        { text: "Creativity and inspiration", style: "Creative", image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=300" }
      ]
    }
  ];

  const getResult = () => {
    const styleCount: { [key: string]: number } = {};
    answers.forEach(answer => {
      const option = questions.flat().find(q => 
        q.options?.some(opt => opt.text === answer)
      );
      if (option) {
        const style = option.options!.find(opt => opt.text === answer)?.style;
        if (style) {
          styleCount[style] = (styleCount[style] || 0) + 1;
        }
      }
    });

    const dominantStyle = Object.keys(styleCount).reduce((a, b) => 
      styleCount[a] > styleCount[b] ? a : b
    );

    const results = {
      'Minimalist': {
        title: 'Modern Minimalist',
        description: 'You appreciate clean lines, open spaces, and the beauty of simplicity. Your ideal home is a serene sanctuary with carefully curated pieces.',
        colors: ['White', 'Light Gray', 'Natural Wood', 'Soft Beige'],
        tips: ['Focus on quality over quantity', 'Embrace negative space', 'Choose furniture with clean lines', 'Add texture through natural materials']
      },
      'Bohemian': {
        title: 'Bohemian Free Spirit',
        description: 'You love mixing patterns, textures, and cultures. Your home tells stories through collected treasures and artistic expressions.',
        colors: ['Terracotta', 'Deep Teal', 'Warm Ochre', 'Rich Burgundy'],
        tips: ['Layer rugs and textiles', 'Mix vintage and global pieces', 'Add plants everywhere', 'Create cozy reading nooks']
      },
      'Contemporary': {
        title: 'Contemporary Sophisticate',
        description: 'You embrace current trends while maintaining timeless appeal. Your space is polished, functional, and effortlessly chic.',
        colors: ['Charcoal Gray', 'Crisp White', 'Navy Blue', 'Brass Accents'],
        tips: ['Invest in statement lighting', 'Mix textures and finishes', 'Keep lines clean but add curves', 'Balance warm and cool tones']
      },
      'Industrial': {
        title: 'Industrial Urban Dweller',
        description: 'You appreciate raw materials, exposed elements, and urban aesthetics. Your home celebrates authentic, unfinished beauty.',
        colors: ['Concrete Gray', 'Raw Steel', 'Warm Brick', 'Deep Black'],
        tips: ['Expose architectural elements', 'Mix metal and wood', 'Add vintage industrial pieces', 'Embrace imperfections']
      }
    };

    return results[dominantStyle] || results['Contemporary'];
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setEmail('');
  };

  const result = showResult ? getResult() : null;

  return (
    <section id="quiz" className="py-20 bg-gradient-to-br from-sage/10 to-blush/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6">
            Discover Your
            <span className="block text-gold">Design Personality</span>
          </h2>
          <p className="text-lg text-warmGray max-w-2xl mx-auto">
            Take our interactive quiz to uncover your unique design style and get personalized recommendations.
          </p>
        </motion.div>

        <div ref={ref} className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentQuestion}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8"
              >
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-warmGray">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="text-sm text-gold font-semibold">
                      {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                    </span>
                  </div>
                  <div className="h-2 bg-cream rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                      className="h-full bg-gold rounded-full"
                    />
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-2xl font-playfair font-bold text-charcoal mb-8 text-center">
                  {questions[currentQuestion].question}
                </h3>

                {/* Options */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(option.text)}
                      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <img
                        src={option.image}
                        alt={option.style}
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white font-inter font-medium text-center px-4">
                          {option.text}
                        </p>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex justify-between">
                  <button
                    onClick={goBack}
                    disabled={currentQuestion === 0}
                    className={`flex items-center px-6 py-3 rounded-full font-montserrat font-medium transition-all duration-300 ${
                      currentQuestion === 0
                        ? 'text-warmGray cursor-not-allowed'
                        : 'text-charcoal hover:text-gold'
                    }`}
                  >
                    <ChevronLeft size={20} className="mr-2" />
                    Back
                  </button>
                  
                  <div className="text-sm text-warmGray self-center">
                    Select an option to continue
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="p-8"
              >
                {/* Result */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                    Your Design Style:
                    <span className="block text-gold text-4xl mt-2">
                      {result?.title}
                    </span>
                  </h3>
                  <p className="text-lg text-warmGray max-w-2xl mx-auto leading-relaxed">
                    {result?.description}
                  </p>
                </div>

                {/* Color Palette */}
                <div className="mb-8">
                  <h4 className="text-xl font-playfair font-semibold text-charcoal mb-4 text-center">
                    Your Color Palette
                  </h4>
                  <div className="flex justify-center space-x-4">
                    {result?.colors.map((color, index) => (
                      <div key={index} className="text-center">
                        <div className="w-16 h-16 rounded-full shadow-lg mx-auto mb-2 bg-gradient-to-br from-gold/20 to-sage/20" />
                        <p className="text-sm text-warmGray">{color}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tips */}
                <div className="mb-8">
                  <h4 className="text-xl font-playfair font-semibold text-charcoal mb-4 text-center">
                    Design Tips for You
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {result?.tips.map((tip, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p className="text-warmGray">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Email Capture */}
                <div className="bg-cream/50 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-playfair font-semibold text-charcoal mb-3 text-center">
                    Get Your Detailed Style Guide
                  </h4>
                  <p className="text-warmGray text-center mb-4">
                    Enter your email to receive a comprehensive style guide with shopping lists, 
                    room layouts, and exclusive design tips.
                  </p>
                  <div className="flex gap-3 max-w-md mx-auto">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warmGray" size={18} />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gold text-white px-6 py-3 rounded-lg font-montserrat font-medium hover:bg-gold/90 transition-colors duration-300 flex items-center"
                    >
                      <Download size={18} className="mr-2" />
                      Get Guide
                    </motion.button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetQuiz}
                    className="border-2 border-gold text-gold px-6 py-3 rounded-full font-montserrat font-medium hover:bg-gold hover:text-white transition-all duration-300"
                  >
                    Retake Quiz
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gold text-white px-6 py-3 rounded-full font-montserrat font-medium hover:bg-gold/90 transition-all duration-300"
                  >
                    Book Style Consultation
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Quiz;