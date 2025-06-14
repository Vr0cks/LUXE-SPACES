import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';

const Blog = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const featuredArticle = {
    title: '2024 Interior Design Trends: What\'s Hot This Year',
    excerpt: 'Discover the latest trends shaping interior design in 2024, from sustainable materials to bold color combinations that are transforming modern homes.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Alexandra Sterling',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Trends'
  };

  const articles = [
    {
      title: 'Small Space, Big Impact: Maximizing Tiny Homes',
      excerpt: 'Transform your compact living space with clever design solutions and multi-functional furniture.',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Marcus Chen',
      date: 'March 10, 2024',
      readTime: '5 min read',
      category: 'Tips'
    },
    {
      title: 'The Psychology of Color in Interior Design',
      excerpt: 'How different colors affect mood and behavior, and how to use this knowledge in your home.',
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Sofia Rodriguez',
      date: 'March 5, 2024',
      readTime: '6 min read',
      category: 'Tips'
    },
    {
      title: 'Sustainable Luxury: Eco-Friendly Design Ideas',
      excerpt: 'Creating beautiful spaces while being mindful of our environmental impact.',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Alexandra Sterling',
      date: 'February 28, 2024',
      readTime: '7 min read',
      category: 'Case Studies'
    },
    {
      title: 'Behind the Scenes: Modern Minimalist Makeover',
      excerpt: 'Take a peek into our design process for this stunning minimalist transformation.',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Marcus Chen',
      date: 'February 20, 2024',
      readTime: '4 min read',
      category: 'Behind The Scenes'
    }
  ];

  const categories = ['All', 'Trends', 'Tips', 'Case Studies', 'Behind The Scenes'];

  return (
    <section id="blog" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6">
            Design
            <span className="block text-gold">Stories</span>
          </h2>
          <p className="text-lg text-warmGray max-w-3xl mx-auto">
            Insights, inspiration, and behind-the-scenes stories from the world of luxury interior design.
          </p>
        </motion.div>

        {/* Search and Categories */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warmGray" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-gold bg-white"
            />
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full text-sm font-montserrat font-medium bg-white text-charcoal hover:bg-gold hover:text-white transition-all duration-300"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        <div ref={ref}>
          {/* Featured Article */}
          <motion.article
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 mb-12"
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-montserrat font-medium">
                    {featuredArticle.category}
                  </span>
                  <span className="bg-gold text-white uppercase px-2 py-1 text-xs font-montserrat font-bold rounded">
                    Featured
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-charcoal mb-4">
                  {featuredArticle.title}
                </h3>
                
                <p className="text-warmGray mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-warmGray">
                    <span>{featuredArticle.author}</span>
                    <span className="mx-2">•</span>
                    <Calendar size={14} className="mr-1" />
                    <span>{featuredArticle.date}</span>
                    <span className="mx-2">•</span>
                    <Clock size={14} className="mr-1" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gold hover:text-gold/80 font-montserrat font-medium"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-charcoal px-3 py-1 rounded-full text-xs font-montserrat font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-warmGray mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-warmGray">
                    <div className="flex items-center">
                      <span>{article.author}</span>
                      <span className="mx-2">•</span>
                      <Clock size={12} className="mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                    
                    <motion.button
                      whileHover={{ x: 3 }}
                      className="text-gold hover:text-gold/80 transition-colors duration-200"
                    >
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-gold/10 to-sage/10 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4">
            Weekly Design Inspiration
          </h3>
          <p className="text-warmGray mb-6 max-w-2xl mx-auto">
            Get the latest design trends, tips, and exclusive content delivered straight to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-gold"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-white px-6 py-3 rounded-full font-montserrat font-medium hover:bg-gold/90 transition-colors duration-300"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;